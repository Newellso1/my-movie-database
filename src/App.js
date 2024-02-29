import { useState, useEffect } from "react";
import Search from "./Search";

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

  return (
    <div className="App">
      <div className="container">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
    </div>
  );
}

export default App;
