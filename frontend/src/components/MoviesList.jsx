function MoviesList({ movies }) {
  console.log(movies);
  if (movies.length === 0) return null;
  return (
    <ul className="mt-6 space-y-2">
      {movies.map((movie, i) => (
        <li key={i} className="bg-gray-100 p-3 rounded-lg shadow">
          🎬 <strong>{movie.title || movie}</strong>
          {movie.year && <> ({movie.year})</>}
          {movie.description && <div>{movie.description}</div>}
        </li>
      ))}
    </ul>
  );
}

export default MoviesList;
