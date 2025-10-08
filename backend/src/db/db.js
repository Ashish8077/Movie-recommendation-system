import { config } from "../config/index.js";
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.MONGO_URI);
    console.log("MongoDB Connected:", conn.connection.host);
  } catch (error) {
    console.error("Error  connecting MongoDB: ", error.message);
    process.exit(1);
  }
};
