import express from "express";
import pinoHttp from "pino-http";
import logger from "../infrastructure/logger/index.js";
import cors from "cors";
import { Server } from "socket.io";
import http from "http";
import { Socket } from "../infrastructure/services/socket.js";
import { initWebinarRoutes } from "./routes/webinarRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";
import userRouter from "./routes/UserRoutees.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(pinoHttp({ logger }));

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

Socket(io)
app.use('/api', initWebinarRoutes(io));
app.use('/api', userRouter)
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler)
app.use((err, req, res, next) => {
  console.error(err); // Log to console
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Something went wrong",
  });
});
app.get("/status", (req, res) => {
  res.send("Working Inamo");
});

export {
  app,
  server
};
