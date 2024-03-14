export default function MovieInfo({
  movieInfo,
  showMovieInfo,
  setShowMovieInfo,
  setSelectedMovie,
}) {
  const movieImage = `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`;

  const handleMovieClose = () => {
    setShowMovieInfo(false);
    setSelectedMovie("");
  };

  const movieInfoStyle = {
    opacity: showMovieInfo ? "1" : "0.1",
  };

  return (
    <div style={movieInfoStyle} className="movie-info">
      <div className="info-container">
        <h4>{movieInfo.original_title}</h4>
        <img
          className="movie-info-poster"
          src={movieImage}
          alt={movieInfo.original_title}
        ></img>
        <p>{movieInfo.overview}</p>
      </div>
      <div className="movie-info-button" onClick={handleMovieClose}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
