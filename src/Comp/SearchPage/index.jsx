import React, { useEffect, useState } from "react";
import Search from "./Search";
import { getCategories } from "./../../apis/categoriesApi";

const SearchPage = ({
  searchResults,
  favoritesObj,
  addToFavorites,
  deleteMovieFavorite,
}) => {
  // get from props
  const loginAge = 6;
  const [categories, setCategories] = useState([]);
  const [askPermission, setAskPermission] = useState([]);

  useEffect(() => {
    setCategories(getCategories(loginAge).allowedCategories);
  }, []);

  return searchResults.map((movieObj) => (
    <Search
      categories={categories}
      key={movieObj.id}
      movieObj={movieObj}
      favoritesObj={favoritesObj}
      addToFavorites={addToFavorites}
      deleteMovieFavorite={deleteMovieFavorite}
    />
  ));
};
export default SearchPage;
