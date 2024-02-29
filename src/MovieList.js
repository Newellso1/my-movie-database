import Movie from "./Movie";

export default function MovieList({ list, handleClick, style }) {
  return (
    <div style={style}>
      {list.map((movie) => (
        <Movie
          key={movie.imdbID}
          title={movie.Title}
          url={movie.Poster}
          year={movie.Year}
          button="+"
          handleClick={() => handleClick(movie)}
        />
      ))}
    </div>
  );
}
