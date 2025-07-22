export default class BaseController {
  constructor(service) {
    if (!service) throw new Error("Service is required");
    this.service = service;
  }
}
