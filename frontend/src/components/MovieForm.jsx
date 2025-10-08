import { useState } from "react";
import axios from "axios";
import { LoaderCircle, Search } from "lucide-react";

function MovieForm({ setMovies }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const getRecommendations = async (userInput) => {
    try {
      setLoading(true);
      const res = await axios.post("/api/v1/recommendation", { userInput });
      const data = res.data.recommendations;
      setLoading(false);
      return { data };
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      setLoading(false);
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
      className="flex w-[90%] mx-auto  gap-4 p-2 bg-gray-300 rounded-md mb-6 max-md:flex-col max-md:items-center max-md:mx-0 max-md:w-[100%] ">
      <div className="border flex rounded-md w-[80%]  max-md:w-full gap-2 bg-white border-none">
        <Search className="w-6 h-6 text-gray-400 my-auto ml-2 " />
        <input
          type="text"
          placeholder="e.g. action movies with strong female lead"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 w-[95%] max-md:w-full  rounded-md outline-none border-none max-md:border placeholder:italic placeholder:text-gray-400 "
        />
      </div>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition-all duration-300 w-[20%] flex justify-center max-md:w-full font-semibold disabled:cursor-not-allowed disabled:bg-blue-300"
        disabled={loading}>
        {loading ? (
          <div className="flex items-center">
            <LoaderCircle className="animate-spin " />
            <span className="ml-2">Searching</span>
          </div>
        ) : (
          "Find Movies"
        )}
      </button>
    </form>
  );
}

export default MovieForm;
