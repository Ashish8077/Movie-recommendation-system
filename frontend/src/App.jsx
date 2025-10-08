import { useState } from "react";
import { MovieForm, MoviesList } from "./components";
import { Film, Search, Star, Clock, TrendingUp, Sparkles } from "lucide-react";

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <div className="min-h-screen flex flex-col items-center p-6 max-[450px]:px-3">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="relative">
          <Film className="w-12 h-12 text-purple-400" />
          <Sparkles className="w-5 h-5 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
        </div>
      </div>
      <h1 className="text-5xl font-bold  mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 max-sm:text-3xl text-center">
        AI Movie Recommender
      </h1>
      <MovieForm setMovies={setMovies} />
      <MoviesList movies={movies} />
    </div>
  );
}

export default App;
