import React, { useState, useRef } from "react";
import DropDownMenu from "./DropDownMenu";

const Search = ({
  movieObj,
  favoritesIds,
  categories,
  deleteMovieFavorite,
}) => {
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0].value);

  const handleClick = (category) => {
    // add to favorites
    console.log(movieObj.id);
    console.log(category);
    setSelectedCategory(category);
    toggleDropDown();
  };

  //   const addToFavorites(movieId, category) {

  //   }
  // click outside close drop down
  const addFavorites = useRef();

  const toggleDropDown = () => {
    setShowCategories(!showCategories);
  };
  //   const dropDown = () => {
  //     setMovie((prevState) => ({
  //       showItems: !prevState.showItems,
  //     }));
  //   };

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
          <div className="title white">
            <b>{movieObj.title}</b>
            <br />
            <p>{movieObj.overview}</p>
          </div>
        </div>
      </div>
      <div className="movieCardFooter w-100 h2">
        <div className="movieCardButtons h-100 flex items-center justify-between">
          {!favoritesIds.includes(movieObj.id) ? (
            showCategories ? (
              <DropDownMenu
                categories={categories}
                toggleDropDown={toggleDropDown}
                handleClick={handleClick}
                className="DropDownMenu"
              />
            ) : (
              <button
                type="button"
                className="bn pa2 dim bg-transparent"
                onClick={() => toggleDropDown()}
              >
                <i className="far fa-heart red center-heart" />
              </button>
            )
          ) : (
            <button
              type="submit"
              className="bn dim bg-transparent pa2"
              onClick={() => deleteMovieFavorite(movieObj.id)}
            >
              <i className="fas fa-heart red" />
            </button>
          )}
          <button className="bn btn dim bg-transparent white mr1 pa2">
            <a
              href={"https://www.themoviedb.org/movie/" + movieObj.id}
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-transparent white link"
            >
              Info
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
