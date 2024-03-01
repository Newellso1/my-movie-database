import { useState } from "react";
import MovieList from "./MovieList";

export default function FavouriteTab({ favourites, movieListStyle }) {
  const [openTab, setOpenTab] = useState(false);

  const tabPositionStyle = {
    left: openTab ? "5vw" : "95vw",
  };

  const buttonShadowStyle = {
    boxShadow: openTab ? "0 0 0.5em #919479" : "",
  };

  return (
    <div className="favourite-tab" style={tabPositionStyle}>
      <div className="tab">
        <div
          className="tab-button"
          style={buttonShadowStyle}
          onClick={() => setOpenTab(!openTab)}
        ></div>
      </div>
      <div className="menu">
        <MovieList list={favourites} style={movieListStyle} />
      </div>
    </div>
  );
}
