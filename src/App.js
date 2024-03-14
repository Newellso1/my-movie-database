import { useState, useEffect } from "react";
import Search from "./Search";
import MovieList from "./MovieList";
import FavouriteTab from "./FavouriteTab";
import MovieInfo from "./MovieInfo";
import AddedError from "./AddedError";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [movieInfo, setMovieInfo] = useState("{}");
  const [selectMovie, setSelectedMovie] = useState("");
  const [showMovieInfo, setShowMovieInfo] = useState(false);
  const [alreadyAdded, setAlreadyAdded] = useState(false);

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

  // https://www.omdbapi.com/?apikey=4a3b711b&i=tt7631058

  const addFavouriteMovie = (movie) => {
    const isAlreadyFavourited = favourites.some(
      (favourite) => favourite.imdbID === movie.imdbID
    );

    if (!isAlreadyFavourited) {
      const newFavouriteList = [...favourites, movie];
      setFavourites(newFavouriteList);
    } else {
      setAlreadyAdded(!alreadyAdded);
    }
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
            setSelectedMovie={setSelectedMovie}
          />
        )}
        {alreadyAdded && (
          <AddedError
            alreadyAdded={alreadyAdded}
            setAlreadyAdded={setAlreadyAdded}
          />
        )}
      </div>
    </div>
  );
}

export default App;
