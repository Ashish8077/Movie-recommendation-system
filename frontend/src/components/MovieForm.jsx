import { useState } from "react";
import axios from "axios";

function MovieForm({ setMovies }) {
  const [input, setInput] = useState("");

  const getRecommendations = async (userInput) => {
    try {
      const res = await axios.post("/api/v1/recommendation", { userInput });
      const data = res.data.recommendations;
      return { data };
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getRecommendations(input);
    setInput("");
    setMovies(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-4 w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="e.g. action movies with strong female lead"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 w-full rounded-md"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
        Get Recommendations
      </button>
    </form>
  );
}

export default MovieForm;
