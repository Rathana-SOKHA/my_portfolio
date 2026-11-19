import React from 'react';
import '../../styles/Footer.css';
import ScrollReveal from '../animations/ScrollReveal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', url: '#home' },
    { name: 'About', url: '#about' },
    { name: 'Skills', url: '#skills' },
    { name: 'Projects', url: '#projects' },
    { name: 'Education', url: '#education' }
  ];

  const socialLinks = [
    { icon: 'fab fa-github', label: 'GitHub', url: 'https://github.com/Rathana-SOKHA' },
    { icon: 'fab fa-linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/rathana-sokha/' },
    { icon: 'fab fa-telegram', label: 'Telegram', url: 'https://t.me/rathana_dev' },
    { icon: 'fab fa-facebook', label: 'Facebook', url: 'https://www.facebook.com/Rathanacoding' }
  ];

  return (
    <footer className="cyber-footer relative isolate box-border w-full overflow-hidden border-t border-[rgba(240,180,80,0.24)] bg-[radial-gradient(ellipse_at_82%_0%,rgba(178,113,48,0.13),transparent_34%),radial-gradient(ellipse_at_12%_100%,rgba(229,169,71,0.07),transparent_38%),#0b0d12] px-[clamp(20px,6vw,112px)] pt-12 pb-7 text-[#f5f2eb] [font-family:'Poppins',sans-serif] max-[560px]:px-5 max-[560px]:pt-[34px] max-[560px]:pb-[22px]">
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,#f0b450_48%,#e5a947_56%,transparent)] [box-shadow:0_0_18px_rgba(240,180,80,0.5)]" aria-hidden="true" />

      <ScrollReveal animation="fade-up" duration={0.8} threshold={0.1}>
        <div className="relative mx-auto w-full max-w-[1400px]">
          <div className="flex items-center justify-between gap-5 border-b border-[rgba(240,180,80,0.18)] pb-6 max-[560px]:items-start max-[560px]:flex-col max-[560px]:gap-[14px] max-[560px]:pb-5">
            <p className="m-0 flex items-center gap-[10px] text-[0.7rem] tracking-[0.16em] text-[#a7a7a5] [font-family:'Space_Mono',monospace] max-[560px]:text-[0.61rem]">
              <span className="text-[1.1rem] text-[#f0b450]" aria-hidden="true">+</span> PORTFOLIO // TRANSMISSION_END
            </p>
            <div className="inline-flex items-center gap-[9px] border border-[rgba(240,180,80,0.3)] bg-[rgba(240,180,80,0.06)] px-3 py-[9px] text-[0.62rem] tracking-[0.1em] text-[#e4d7bd] [font-family:'Space_Mono',monospace] max-[560px]:text-[0.58rem]">
              <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-[#e8ad58] [box-shadow:0_0_10px_rgba(240,180,80,0.8)]" aria-hidden="true" />
              AVAILABLE FOR PROJECTS
            </div>
          </div>

          <div className="grid grid-cols-[minmax(0,1.35fr)_minmax(140px,0.7fr)_minmax(250px,1fr)] gap-[clamp(32px,6vw,92px)] py-[42px] max-[800px]:grid-cols-[repeat(2,minmax(0,1fr))] max-[800px]:gap-10 max-[560px]:grid-cols-1 max-[560px]:gap-[30px] max-[560px]:py-[30px]">
            <div className="flex flex-col items-start gap-4 max-[800px]:col-span-full max-[560px]:col-span-1">
              <a href="#home" className="inline-flex items-center gap-1 text-base font-bold tracking-[0.08em] text-[#f5f2eb] no-underline [font-family:'Space_Mono',monospace] focus-visible:outline-2 focus-visible:outline-[#f0b450] focus-visible:outline-offset-4">
                <span className="text-[#f0b450]">[</span>
                <span className="text-[0.9rem] text-[#a7a7a5]">&lt;/&gt;</span>
                <span className="text-[1.05rem] font-extrabold tracking-[0.08em] text-white [font-family:'Montserrat','Poppins',-apple-system,sans-serif] [text-shadow:0_2px_10px_rgba(0,0,0,0.7)]">RATHANA</span>
                <span className="text-[1.05rem] font-extrabold tracking-[0.08em] text-[#f0b450] [font-family:'Montserrat','Poppins',-apple-system,sans-serif] [text-shadow:0_0_14px_rgba(229,169,71,0.65)]">.DEV</span>
                <span className="text-[#f0b450]">]</span>
              </a>
              <p className="m-0 mt-[2px] text-[clamp(1.35rem,2.4vw,2.05rem)] font-extrabold leading-[1.15] tracking-[-0.055em] text-[#f5f2eb]">LET’S BUILD SOMETHING<br />MEANINGFUL.</p>
              <p className="m-0 text-[0.72rem] leading-[1.9] text-[#a7a7a5] [font-family:'Space_Mono',monospace]">
                Clean code. Thoughtful design.<br />
                Better digital experiences.
              </p>
            </div>

            <div>
              <h2 className="mb-5 mt-1 flex items-center gap-[10px] text-[0.67rem] font-bold tracking-[0.13em] text-[#e9c27f] [font-family:'Space_Mono',monospace]"><span className="text-[#e5a947]">01</span> SYSTEM_INDEX</h2>
              <ul className="m-0 flex list-none flex-col gap-[9px] p-0">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.url} className="inline-flex items-center gap-2 py-[3px] text-[0.76rem] text-[#a7a7a5] no-underline [font-family:'Space_Mono',monospace] [transition:color_180ms_ease,transform_180ms_ease] before:-translate-x-1 before:opacity-0 before:text-[#e5a947] before:content-['/'] before:[transition:opacity_180ms_ease,transform_180ms_ease] hover:translate-x-1 hover:text-white hover:before:translate-x-0 hover:before:opacity-100 motion-reduce:transition-none motion-reduce:before:transition-none focus-visible:outline-2 focus-visible:outline-[#f0b450] focus-visible:outline-offset-4">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-start">
              <h2 className="mb-5 mt-1 flex items-center gap-[10px] text-[0.67rem] font-bold tracking-[0.13em] text-[#e9c27f] [font-family:'Space_Mono',monospace]"><span className="text-[#e5a947]">02</span> SIGNAL_RELAYS</h2>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    className="inline-flex min-h-[38px] items-center gap-2 border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.035)] px-[11px] text-[0.62rem] tracking-[0.06em] text-[#d3d0c8] no-underline [font-family:'Space_Mono',monospace] [transition:color_180ms_ease,border-color_180ms_ease,background_180ms_ease,transform_180ms_ease] hover:-translate-y-0.5 hover:border-[rgba(240,180,80,0.55)] hover:bg-[rgba(240,180,80,0.08)] hover:text-white motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-[#f0b450] focus-visible:outline-offset-4 [&_i]:text-[0.85rem] [&_i]:text-[#e8ad58]"
                    title={social.label}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={social.icon} />
                    <span>{social.label.toUpperCase()}</span>
                  </a>
                ))}
              </div>

              <div className="mt-[22px] flex w-full flex-col items-start gap-[9px] border-l border-[#e8ad58] py-[14px] pl-[14px] [font-family:'Space_Mono',monospace]">
                <span className="text-[0.61rem] tracking-[0.09em] text-[#a7a7a5]">HAVE A PROJECT IN MIND?</span>
                <a href="mailto:rathanasokha26@gmail.com" className="inline-flex items-center gap-2 text-[0.72rem] font-bold tracking-[0.08em] text-[#f0b450] no-underline [transition:color_180ms_ease] hover:text-white motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-[#f0b450] focus-visible:outline-offset-4">
                  LET’S TALK <span aria-hidden="true">↗</span>
                </a>
                <a href="mailto:rathanasokha26@gmail.com" className="text-[0.69rem] text-[#a7a7a5] no-underline [overflow-wrap:anywhere] [transition:color_180ms_ease] hover:text-white motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-[#f0b450] focus-visible:outline-offset-4">
                  rathanasokha26@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-[rgba(255,255,255,0.1)] pt-5 text-[0.6rem] tracking-[0.08em] text-[#858581] [font-family:'Space_Mono',monospace] max-[560px]:items-start max-[560px]:flex-col max-[560px]:text-[0.56rem] max-[560px]:leading-[1.7]">
            <div className="flex items-center gap-[10px]">
              <span className="text-[0.75rem] font-bold text-[#f0b450]" aria-hidden="true">SR.</span>
              <span>&copy; {currentYear} SOKHA RATHANA. ALL RIGHTS RESERVED.</span>
            </div>

            <div className="text-right max-[560px]:text-left">
              <span>DESIGNED WITH INTENT <span className="px-1 text-[#e5a947]">+</span> BUILT WITH REACT</span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}
