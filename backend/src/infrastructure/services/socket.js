import logger from "../logger/index.js";

let ioInstance = null;

export function Socket(io) {
  ioInstance = io;

  io.on("connection", (socket) => {
    logger.info(`"Client Connected`, socket.id);

    socket.on("disconnect", () => {
      logger.info("client disconnected", socket.id);
    });
  });
}

export function getIO() {
  if (!ioInstance) throw new Error("Socket.io not initialized");

  return ioInstance;
}
