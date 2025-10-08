import Recommendation from "../models/recommendation.model.js";
import { generateMovieRecommendations } from "../services/openai.service.js";

export const getRecommendation = async (req, res) => {
  try {
    const { userInput } = req.body;
    if (!userInput)
      return res
        .status(404)
        .json({ success: false, message: "User input is required" });
    const movies = await generateMovieRecommendations(userInput.trim());
    const record = new Recommendation({
      userInput,
      recommendedMovies: movies,
    });
    await record.save();
    res.status(200).json({ success: true, recommendations: movies });
  } catch (error) {
    console.error("Error on getRecommendation controller", error.message);
    res.status(500).json({ success: false, message: "Interna server error" });
  }
};
