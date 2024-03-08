import { useState, useEffect } from "react";
import Search from "./Search";
import MovieList from "./MovieList";
import FavouriteTab from "./FavouriteTab";
import MovieInfo from "./MovieInfo";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [movieInfo, setMovieInfo] = useState("{}");
  const [selectMovie, setSelectedMovie] = useState("tt1981115");
  const [showMovieInfo, setShowMovieInfo] = useState(false);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=4a3b711b`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
        }
      });
  }, [searchQuery]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${selectMovie}?api_key=a0b0a5a7c9de82ebe8eeea1282f66454`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setMovieInfo(data);
        }
      });
  }, [selectMovie]);

  const movieListStyle = {
    border: "4px solid",
    borderRadius: "1em",
    maxWidth: "80%",
    display: "flex",
    flexDirection: "row",
    gap: "1em",
    overflowX: "scroll",
    padding: "2em",
    backgroundColor: "#CCD5AE",
  };

  const FavouriteListStyle = {
    border: "4px solid",
    borderRadius: "1em",
    maxWidth: "70%",
    maxHeight: "80%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1em",
    overflowX: "scroll",
    padding: "2em",
    backgroundColor: "#d4a373",
    position: "relative",
    right: "3em",
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  };

  const deleteFavouriteMovie = (imdbID) => {
    setFavourites((prevFavourites) =>
      prevFavourites.filter((movie) => movie.imdbID !== imdbID)
    );
  };

  const handleMovieClick = (imdbID) => {
    setSelectedMovie(imdbID);
    setShowMovieInfo(true);
  };

  return (
    <div className="App">
      <div className="container">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        {searchQuery && (
          <MovieList
            list={movies}
            style={movieListStyle}
            handleClick={addFavouriteMovie}
            handleMovieClick={handleMovieClick}
          />
        )}
        <FavouriteTab
          favourites={favourites}
          movieListStyle={movieListStyle}
          FavouriteListStyle={FavouriteListStyle}
          deleteFavouriteMovie={deleteFavouriteMovie}
          handleMovieClick={handleMovieClick}
        />
        {showMovieInfo && (
          <MovieInfo
            movieInfo={movieInfo}
            showMovieInfo={showMovieInfo}
            setShowMovieInfo={setShowMovieInfo}
          />
        )}
      </div>
    </div>
  );
}

export default App;
