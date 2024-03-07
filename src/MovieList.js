import Movie from "./Movie";

export default function MovieList({
  list,
  handleClick,
  style,
  button = "+",
  handleMovieClick,
}) {
  return (
    <div style={style}>
      {list.map((movie) => (
        <Movie
          key={movie.imdbID}
          id={movie.imdbID}
          title={movie.Title}
          url={movie.Poster}
          year={movie.Year}
          button={button}
          handleClick={() => handleClick(movie)}
          handleMovieClick={handleMovieClick}
        />
      ))}
    </div>
  );
}
