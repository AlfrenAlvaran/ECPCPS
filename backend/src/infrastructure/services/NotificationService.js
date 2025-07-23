import nodemailer from "nodemailer";
import { env } from "../config/env.js";

class NotificationService {
  constructor(io) {
    this.io = io;
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: env.Gmail[0].gmail,
        pass: env.Gmail[0].password,
      },
    });
  }

  notifyNewWebinar(webinar) {
    this.io?.emit("webinar", webinar);
  }

  async sendInvitation({ email, name, title, date, link, img }) {
    const subject = `You're invited to: ${title}`;

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; border-radius: 10px;">
        <img src="${img}" alt="Webinar Banner" style="width: 100%; height: auto; border-radius: 10px;" />

        <h2 style="color: #333;">Hello, ${name} 👋</h2>
        <p style="font-size: 16px; color: #444;">You're successfully registered for the webinar:</p>

        <h3 style="color: #007bff;">${title}</h3>
        <p><strong>🗓 Date & Time:</strong> ${date}</p>

        <p>
          <a href="${link}" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px;">Join Webinar</a>
        </p>

        <p style="color: #888;">If the button above doesn’t work, copy and paste the link into your browser:</p>
        <p style="font-size: 14px; color: #555;">${link}</p>

        <hr />
        <p style="font-size: 12px; color: #aaa;">Thank you!<br>The Webinar Team</p>
      </div>
    `;

    try {
      await this.transporter.sendMail({
        from: `"Webinar Team" <${env.Gmail[0].gmail}>`,
        to: email,
        subject,
        html,
      });

      console.log(`✅ Email sent to ${email}`);
    } catch (error) {
      console.error("❌ Failed to send email:", error.message);
      throw new Error("Unable to send invitation email.");
    }
  }
}
export default NotificationService;
