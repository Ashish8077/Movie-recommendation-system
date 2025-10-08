import express from "express";

import recommendationRoute from "./routes/recommend.route.js";
import { config } from "./config/index.js";
import { connectDB } from "./db/db.js";
import cors from "cors";
import path from "path";

const __dirname = path.resolve();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/v1", recommendationRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend", "dist")));
  app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(config.PORT, () => {
  connectDB();
  console.log(`server started at http://localhost:${config.PORT} `);
});
