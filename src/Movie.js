export default function Movie({
  title = "title",
  url = "",
  year = "Year of Release",
  button = "button",
  handleClick,
}) {
  return (
    <div className="movie">
      <div className="movie-poster">
        <img src={url} alt={title} height="300px" width="200px" />
        <div className="picture-menu">
          <div className="movie-button" onClick={handleClick}>
            {button}
          </div>
        </div>
      </div>
      <h4>{title}</h4>
      <h4>({year})</h4>
    </div>
  );
}
