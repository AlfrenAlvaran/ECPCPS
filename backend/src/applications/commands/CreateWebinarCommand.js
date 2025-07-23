import BaseCommand from "../../shared/base/BaseCommand.js";
import { BadRequestError } from "../../shared/errors/index.js";

export default class CreateWebinarCommand extends BaseCommand {
  constructor({ repository, io, notification }) {
    super(repository, io, notification);
  }

  async execute(data) {
    const webinar = {
      ...data,
      // createAt: new Date(),
    };
    const save = await this.repository.create(webinar);
    console.log("Saved webinar:", save);
    this.notification?.notifyNewWebinar(save);
    return save;
  }

  async registerAttendees(id, { name, email }) {
    const webinar = await this.repository.findById(id);
    if (!webinar) throw new BadRequestError("Webinar not found", 400);

    if (webinar.attendees.some((a) => a.email === email)) throw new BadRequestError("You already register please check your email")
      
      webinar.attendees.push({name, email})
      
      await webinar.save()

      await this.notification.sendInvitation({
        email,
        name,
        title: webinar.title,
        date: webinar.timeNDate,
        link: webinar.link,
        img: webinar.img,
      });

    return {name, email};
  }
}
