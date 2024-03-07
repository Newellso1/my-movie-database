import Movie from "./Movie";

export default function MovieList({ list, handleClick, style, button = "+" }) {
  return (
    <div style={style}>
      {list.map((movie) => (
        <Movie
          key={movie.imdbID}
          title={movie.Title}
          url={movie.Poster}
          year={movie.Year}
          button={button}
          handleClick={() => handleClick(movie)}
        />
      ))}
    </div>
  );
}
