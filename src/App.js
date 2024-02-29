import { useState, useEffect } from "react";
import Search from "./Search";
import MovieList from "./MovieList";

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
    border: "1px solid",
    maxWidth: "80%",
    display: "flex",
    flexDirection: "row",
    gap: "1em",
    overflowX: "scroll",
    padding: "2em",
  };

  return (
    <div className="App">
      <div className="container">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <MovieList list={movies} style={movieListStyle} />
      </div>
    </div>
  );
}

export default App;
