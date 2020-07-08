import React, { useState, useEffect } from "react";
import DropDownMenu from "../DropDownMenu/index";
import { getLists } from "../../apis/categoriesApi";

const Search = ({
  movieObj,
  favoritesObj,
  addToFavorites,
  deleteMovieFavorite,
}) => {
  const [storedLists, setStoredLists] = useState([]);

  useEffect(() => {
    setStoredLists(getLists());
  });
  const handleClick = (params) => {
    // add to favorites
    addToFavorites(movieObj, params);
    // setSelectedCategory(category);
  };

  // click outside close drop down
  //   const addFavorites = useRef();

  const isAdded = favoritesObj.filter((fav) => {
    return fav.id === movieObj.id;
  });

  return (
    <div className="movieCard-container flex flex-column">
      <div className="movieCard w-100">
        <div className="front">
          <img
            alt="Movie Poster"
            width="100%"
            src={"https://image.tmdb.org/t/p/w185/" + movieObj.poster_path}
          />
        </div>
        <div className="back">
          <div className="movieCardContent">
            <strong>{movieObj.title}</strong>
            <p>{movieObj.overview}</p>
          </div>
        </div>
      </div>
      <div className="movieCardFooter w-100 h2">
        <div className="movieCardButtons h-100 flex items-center justify-between">
          {isAdded.length ? (
            <button
              type="submit"
              className="bn dim bg-transparent pa2"
              onClick={() => deleteMovieFavorite(movieObj.id)}
            >
              <i className="fas fa-heart red" />
            </button>
          ) : (
            <DropDownMenu
              btnClass="bn"
              placholder={<i className="far fa-heart red center-heart" />}
              options={storedLists}
              handleClick={handleClick}
            />
          )}
          <button className="bn btn dim bg-transparent white mr1 pa2">
            <a
              href={"https://www.themoviedb.org/movie/" + movieObj.id}
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-transparent white link"
            >
              More
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
