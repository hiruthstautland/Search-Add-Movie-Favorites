import React from "react";
import Search from "./Search";

const SearchPage = ({
  searchResults,
  favoritesIds,
  addToFavorites,
  deleteMovieFavorite,
}) =>
  searchResults.map((movieObj) => (
    <Search
      key={movieObj.id}
      movieObj={movieObj}
      favoritesIds={favoritesIds}
      addToFavorites={addToFavorites}
      deleteMovieFavorite={deleteMovieFavorite}
    />
  ));
export default SearchPage;
