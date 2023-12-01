import { httpStatusText } from "../utils/httpStatusText.js";
import authRouter from "./Auth/auth.router.js";
import messageRouter from "./Message/message.router.js";
import userRouter from "./User/user.router.js";
import logger from "../utils/logger.js";

const appRouter = (app, express) => {
  app.use(express.json());
  app.use("/uploads", express.static("uploads"));

  app.use(logger);

  // Auth
  app.use("/api/auth", authRouter);

  // Messages
  app.use("/api/message", messageRouter);

  // User
  app.use("/api/user", userRouter);

  app.get("/api/ping", (_, res) => {
    res.send(
      `<h1><a href="https://www.youtube.com/watch?v=NQnKicJiIN8" target="_blank" ><center>Pong</center></a></h1>`
    );
  });

  app.get("/", (_, res) => {
    res.json({
      status: "success",
      message:
        "Welcome to Saraha App! Explore our API by using the Postman collection available in the repository.",
    });
  });

  // Not found
  app.all("*", (req, res, next) => {
    res.status(500).json({
      status: httpStatusText.FAIL,
      message: "End-Point Not Implemented Yet",
    });
  });

  // Global Error Handler
  app.use((error, req, res, next) => {
    const { message, statusCode, statusText } = error;

    res.status(statusCode || 500).json({
      status: statusText || httpStatusText.ERROR,
      code: statusCode || 500,
      message: message || "Internal Server Error",
    });
  });
};

export default appRouter;
