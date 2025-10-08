import { useState } from "react";
import { MovieForm, MoviesList } from "./components";

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">🎬 Movie Recommender</h1>
      <MovieForm setMovies={setMovies} />
      <MoviesList movies={movies} />
    </div>
  );
}

export default App;
