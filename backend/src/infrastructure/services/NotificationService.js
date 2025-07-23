import nodemailer from 'nodemailer'
import { env } from '../config/env.js';

class NotificationService {
  constructor(io) {
    this.io = io;
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: env.Gmail[0].gmail,
        pass: env.Gmail[0].password
      }
    })
  }

  notifyNewWebinar(webinar) {
    this.io?.emit("webinar", webinar);
  }

  async sendInvitation({ email, name, title, date }) {
    
  }
}
export default NotificationService;
