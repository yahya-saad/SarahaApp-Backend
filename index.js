import express from "express";
import "dotenv/config.js";
import { connectDB } from "./Database/connection.js";
import appRouter from "./src/app.router.js";
import cors from "cors";
const app = express();
const port = process.env.PORT || 3001;

connectDB();
app.use(cors());
appRouter(app, express);

app.listen(port, () => console.log(`App listening on port ${port}!`));
