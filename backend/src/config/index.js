import dotenv from "dotenv";
dotenv.config();

export const config = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  HF_MODEL_ID: process.env.HF_MODEL_ID,
  HF_API_KEY: process.env.HF_API_KEY,
};
