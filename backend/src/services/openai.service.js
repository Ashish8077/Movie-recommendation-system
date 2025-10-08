import OpenAI from "openai";
import { config } from "../config/index.js";

const client = new OpenAI({
  baseURL: "https://router.huggingface.co/v1",
  apiKey: config.HF_API_KEY,
});

export async function generateMovieRecommendations(userInput) {
  try {
    const chatCompletion = await client.chat.completions.create({
      model: "openai/gpt-oss-120b:fireworks-ai",
      messages: [
        {
          role: "user",
          content: `Recommend 5 movies based on this description: ${userInput}. Respond in a numbered list.`,
        },
      ],
    });

    const text = chatCompletion.choices[0].message.content;

    const lines = text.split("\n").filter((line) => line.trim() !== "");

    const movies = lines.map((line) => {
      const match = line.match(/\*\*(.*?)\*\* \((\d{4})\) – (.*)/);
      if (match) {
        return {
          title: match[1].trim(),
          year: match[2],
          description: match[3].trim(),
        };
      }
      return { title: line }; 
    });

    return movies;
  } catch (error) {
    console.error("Error calling Hugging Face Router:", error);
    return ["API error or quota exceeded"];
  }
}
