export default class BaseCommand {
  constructor(repository, io = null, notification = null) {
    if (!repository) throw new Error("Repository is required");
    this.repository = repository;
    this.io = io
    this.notification = notification
  }
}
