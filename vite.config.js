import { Buffer } from 'node:buffer'
import process from 'node:process'
import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import trackVisitor from './api/track-visitor.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'local-visitor-tracking-api',
      configureServer(server) {
        const localEnv = loadEnv(
          server.config.mode,
          resolve(process.cwd(), 'src'),
          '',
        )

        for (const key of ['TELEGRAM_BOT_TOKEN', 'TELEGRAM_CHAT_ID']) {
          if (!process.env[key] && localEnv[key]) {
            process.env[key] = localEnv[key]
          }
        }

        server.middlewares.use('/api/track-visitor', (req, res, next) => {
          const runHandler = async () => {
            if (req.method === 'POST') {
              const chunks = []
              let size = 0

              for await (const chunk of req) {
                size += chunk.length
                if (size > 16 * 1024) {
                  req.resume()
                  res.statusCode = 413
                  res.end(JSON.stringify({ message: 'Request body too large' }))
                  return
                }
                chunks.push(chunk)
              }

              try {
                req.body = chunks.length
                  ? JSON.parse(Buffer.concat(chunks).toString('utf8'))
                  : {}
              } catch {
                res.statusCode = 400
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ message: 'Invalid JSON body' }))
                return
              }
            }

            await trackVisitor(req, {
              status(code) {
                res.statusCode = code
                return this
              },
              json(body) {
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify(body))
                return this
              },
            })
          }

          runHandler().catch(next)
        })
      },
    },
  ],
  build: {
    cssMinify: 'esbuild',
  },
})
