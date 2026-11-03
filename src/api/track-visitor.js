import process from "node:process";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  try {
    const {
      page,
      device,
      browser,
    } = req.body || {};

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return res.status(500).json({
        message: "Telegram configuration missing",
      });
    }

    const country =
      req.headers["x-vercel-ip-country"] || "Unknown";

    const date = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Phnom_Penh",
    });

    const message = `
👀 NEW PORTFOLIO VISITOR

🌐 Website: My Portfolio
📅 Date: ${date}
📍 Country: ${country}

📱 Device: ${device || "Unknown"}
🌍 Browser: ${browser || "Unknown"}
🔗 Page: ${page || "/"}

🚀 Someone visited your portfolio!
`;

    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      }
    );

    const result = await response.json();

    if (!response.ok || !result.ok) {
      return res.status(502).json({
        message: "Telegram notification failed",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Visitor notification sent",
    });

  } catch (error) {
    console.error("Visitor tracking error:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
}
