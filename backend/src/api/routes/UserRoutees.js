import express from "express";
import AuthCommand from "../../applications/commands/AuthCommand.js";
import AuthRepository from "../../infrastructure/repositories/AuthRepository.js";
import AuthController from "../controllers/AuthController.js";

const userRouter = express.Router();
const repository = new AuthRepository();
const service = new AuthCommand({ repository });

const controller = new AuthController(service);

userRouter.post("/register", controller.register);
userRouter.post('/login', controller.login)
export default userRouter;
