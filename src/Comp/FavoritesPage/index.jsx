import React from "react";
import Favorites from ".";

const FavoritesPage = ({ favoritesIds, deleteMovieFavorite, navigate }) => (
  <>
    {favoritesIds.map((movieId) => (
      <Favorites
        key={movieId}
        movieId={movieId}
        favoritesIds={favoritesIds}
        deleteMovieFavorite={deleteMovieFavorite}
      />
    ))}

    {favoritesIds.length >= 1 ? (
      <button
        type="button"
        className="br3 bn dim pa2 ma3 bg-green white"
        value="press me"
        onClick={() => navigate("Search")}
      >
        Back To Search
      </button>
    ) : (
      <button
        type="button"
        className="dim bg-green white br3 bn pa2 ma3"
        onClick={() => navigate("Search")}
      >
        <h1>No Saved Favorites, (Back to search)</h1>
      </button>
    )}
  </>
);

export default FavoritesPage;
