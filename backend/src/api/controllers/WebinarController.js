import BaseController from "../../shared/base/BaseController.js";

class WebinarController extends BaseController {
  constructor(service) {
    super(service);
  }

  createWebinar = async (req, res, next) => {
    try {
      const result = await this.service.execute(req.body);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  };
}
export default WebinarController;