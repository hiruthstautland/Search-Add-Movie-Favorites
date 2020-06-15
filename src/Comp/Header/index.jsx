import React from "react";
const Header = ({ navigate, searchValue, searchChangeHandler }) => {
  return (
    <div className="flex justify-between pa3">
      <div>
        <button
          className="dim bn bg-transparent"
          onClick={() => navigate("search")}
        >
          <img className="w2" src="MDB-logo.png" alt="movieDB-logo" />
        </button>
      </div>
      <div className="flex bb b--white">
        <input
          type="text"
          minLength="2"
          maxLength="30"
          className="searchBarInput white bg-transparent pa0"
          value={searchValue}
          onChange={searchChangeHandler}
          placeholder="Search"
        />
        <img src="searchIcon.png" alt="searchIcon" className="h2" />
      </div>
      <div>
        <button
          type="button"
          className="bn bg-green dim white"
          onClick={() => navigate("favorites")}
        >
          My Movies
        </button>
      </div>
    </div>
  );
};
export default Header;
