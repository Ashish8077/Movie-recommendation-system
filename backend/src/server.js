import express from "express";

import recommendationRoute from "./routes/recommend.route.js";
import { config } from "./config/index.js";
import { connectDB } from "./db/db.js";

const app = express();

app.use(express.json());

app.use("/api/v1", recommendationRoute);

app.listen(config.PORT, () => {
  connectDB();
  console.log(`server started at http://localhost:${config.PORT} `);
});
