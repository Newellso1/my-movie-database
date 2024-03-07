import { useState, useEffect } from "react";
import Search from "./Search";
import MovieList from "./MovieList";
import FavouriteTab from "./FavouriteTab";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=4a3b711b`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
        }
      });
  }, [searchQuery]);

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
  return (
    <div className="App">
      <div className="container">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        {searchQuery && (
          <MovieList
            list={movies}
            style={movieListStyle}
            handleClick={addFavouriteMovie}
          />
        )}
        <FavouriteTab
          favourites={favourites}
          movieListStyle={movieListStyle}
          FavouriteListStyle={FavouriteListStyle}
          deleteFavouriteMovie={deleteFavouriteMovie}
        />
      </div>
    </div>
  );
}

export default App;
