import logger from "../../infrastructure/logger/index.js";
import BaseController from "../../shared/base/BaseController.js";

class AuthController extends BaseController {
  constructor(service) {
    super(service);
    this.service = service;
  }

  register = async (req, res, next) => {
    try {
      const user = await this.service.registerUser(req.body);
      return res
        .status(201)
        .json({ success: true, message: "Success", data: user });
    } catch (error) {
      next(error);
    }
  };

  login = async (req, res, next) => {
    try {
      logger.info("Frontend: ", req.body)
      const user = await this.service.login(req.body);
      return res
        .status(200)
        .json({ success: true, message: "Login success", data: user });
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
