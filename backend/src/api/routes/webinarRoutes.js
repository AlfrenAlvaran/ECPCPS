import express from "express";
import WebinarRepository from "../../infrastructure/repositories/WebinarRepository.js";
import NotificationService from "../../infrastructure/services/NotificationService.js";
import CreateWebinarCommand from "../../applications/commands/CreateWebinarCommand.js";
import WebinarController from "../controllers/WebinarController.js";
import CloudinaryService from "../../infrastructure/services/CloudinaryService.js";
import { upload } from "../middlewares/upload.js";

const routerWebinar = express.Router();

export function initWebinarRoutes(io) {
  const repository = new WebinarRepository();
  const notification = new NotificationService(io);
  const service = new CreateWebinarCommand({
    repository,
    io,
    notification,
  });
  const cloudinary = new CloudinaryService()
  const controller = new WebinarController(service, cloudinary);

  routerWebinar.post("/webinar", upload.single('image'), controller.createWebinar);

  return routerWebinar;
}
