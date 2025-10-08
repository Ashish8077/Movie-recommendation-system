import mongoose from "mongoose";

const recommendationSchema = new mongoose.Schema({
  userInput: { type: String, required: true },
  recommended_movies: [String],
  created_at: { type: Date, default: Date.now },
});

const Recommendation = mongoose.model("Recommendation", recommendationSchema);

export default Recommendation;
