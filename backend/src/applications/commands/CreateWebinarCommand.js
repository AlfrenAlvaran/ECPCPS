import BaseCommand from "../../shared/base/BaseCommand.js";

export default class CreateWebinarCommand extends BaseCommand {
  constructor({ repository, io, notification }) {
    super(repository, io, notification);
  }

  async execute(data) {
    const webinar = {
      ...data,
      createAt: new Date(),
    };

    const save = await this.repository.create(webinar);
    this.notification?.notifyNewWebinar(save);
    return save;
  }
}
