export default function MovieInfo({
  movieInfo,
  showMovieInfo,
  setShowMovieInfo,
}) {
  const movieImage = `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`;

  return (
    <div className="movie-info">
      <div className="info-container">
        <h4>{movieInfo.original_title}</h4>
        <img
          className="movie-info-poster"
          src={movieImage}
          alt={movieInfo.original_title}
        ></img>
        <p className="movie-overview">{movieInfo.overview}</p>
      </div>
      <div
        className="movie-info-button"
        onClick={() => setShowMovieInfo(false)}
      >
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
