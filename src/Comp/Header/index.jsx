import React from "react";
const Header = ({ navigate, searchValue, searchChangeHandler }) => {
  return (
    <div className="flex justify-between h3">
      {/* <button
        className="dim bn bg-transparent pa0"
        onClick={() => navigate("search")}
      >
      </button> */}
      <img src="MDB-logo.png" alt="movieDB-logo" className="w3" />
      <div className="flex bb b--white pa2">
        <input
          type="text"
          minLength="2"
          maxLength="30"
          className="searchBarInput white bg-transparent pa1"
          value={searchValue}
          onChange={searchChangeHandler}
          placeholder="Search"
        />
        <img src="searchIcon.png" alt="searchIcon" className="h1" />
      </div>
      <button
        aria-label="My Movies"
        type="button"
        className="bn bg-green dim white"
        onClick={() => navigate("favorites")}
      >
        My Movies
      </button>
    </div>
  );
};
export default Header;
