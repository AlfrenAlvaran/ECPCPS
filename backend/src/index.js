import { server, app } from "./api/server.js";
import { env } from "./infrastructure/config/env.js";
import connection from "./infrastructure/database/connection.js";
import logger from "./infrastructure/logger/index.js";

const PORT = env.port;

(async () => {
  try {
    await connection();
    server.listen(PORT, "0.0.0.0", () => {
      logger.info(`server ready at http://${env.ip}:${env.port}`);
    });
  } catch (error) {
    logger.error({ err: error }, "❌ Server failed to start");
    process.exit(1);
  }
})();
