import express from "express";
import WebinarRepository from "../../infrastructure/repositories/WebinarRepository.js";
import NotificationService from "../../infrastructure/services/NotificationService.js";
import CreateWebinarCommand from "../../applications/commands/CreateWebinarCommand.js";
import WebinarController from "../controllers/WebinarController.js";

const routerWebinar = express.Router();

export function initWebinarRoutes(io) {
  const repository = new WebinarRepository();
  const notification = new NotificationService(io);
  const service = new CreateWebinarCommand({
    repository,
    io,
    notification,
  });
  const controller = new WebinarController(service);

  routerWebinar.post("/webinar", controller.createWebinar);

  return routerWebinar;
}
