import { useState } from "react";
import MovieList from "./MovieList";

export default function FavouriteTab({
  favourites,
  FavouriteListStyle,
  deleteFavouriteMovie,
}) {
  const [openTab, setOpenTab] = useState(false);

  const tabPositionStyle = {
    left: openTab ? "2vw" : "95vw",
  };

  const buttonShadowStyle = {
    boxShadow: openTab ? "0 0 0.5em #919479" : "",
  };

  const listLength = favourites.length;
  return (
    <div className="favourite-tab" style={tabPositionStyle}>
      <div className="tab">
        <h5> My favourites ({listLength})</h5>
        <div
          className="tab-button"
          style={buttonShadowStyle}
          onClick={() => setOpenTab(!openTab)}
        ></div>
      </div>
      <div className="menu">
        {favourites.length > 0 && (
          <MovieList
            list={favourites}
            style={FavouriteListStyle}
            button="-"
            handleClick={(movie) => deleteFavouriteMovie(movie.imdbID)}
          />
        )}
      </div>
    </div>
  );
}
