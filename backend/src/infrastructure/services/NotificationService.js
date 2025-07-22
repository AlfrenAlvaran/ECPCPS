class NotificationService {
  constructor(io) {
    this.io = io;
  }

  notifyNewWebinar(webinar) {
    this.io?.emit("webinar", webinar);
  }
}
export default NotificationService;