import React, { useEffect, useState } from "react";
import Search from "./Search";

const SearchPage = ({
  searchResults,
  favoritesObj,
  addToFavorites,
  categories,
  deleteMovieFavorite,
}) => {
  //   const [askPermission, setAskPermission] = useState([]);

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
