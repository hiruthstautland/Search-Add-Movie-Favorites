import React, { useState, useEffect } from "react";
import "./App.css";
import * as debounce from "lodash.debounce";
import * as api from "./Comp/movieApi";
import Header from "./Comp/Header/index";
import Footer from "./Comp/Footer";
import SearchPage from "./Comp/SearchPage";
import FavoritesPage from "./Comp/FavoritesPage";
// import Pagination from './Comp/Pagination';

function App() {
  const [activePage, setActivePage] = useState("search");
  const [favoritesIds, setFavoritesIds] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalDataResult, setTotalDataResult] = useState(0);

  const searchChangeHandler = debounce((searchValue) => {
    setSearchValue(searchValue);
    performSearch(searchValue);
  }, 200);

  const performSearch = (searchValue) => {
    if (searchValue) {
      api.search(searchValue).then((data) => {
        setSearchResults([...data.results]);
        setTotalDataResult(data.total_results);
      });
    }
  };

  useEffect(() => {
    showView(activePage);

    if (searchValue != searchValue) {
      performSearch(searchValue);
    }
  }, [activePage]);

  const addToFavorites = (movieId) => {
    setFavoritesIds(favoritesIds.concat([movieId]));
  };
  // addToCategory(category){
  // 	this.setState({
  // 		category: this.state
  // 	})
  // }

  const deleteMovieFavorite = (movieId) => {
    setFavoritesIds(
      favoritesIds.filter(function (movie) {
        return movie !== movieId;
      })
    );
  };

  const navigate = (pageName) => {
    setActivePage(pageName);
  };
  const nextPage = (pageNumber) => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=" +
        api.movieApi +
        "&query=" +
        searchValue +
        "&page=" +
        pageNumber,
      {
        method: "GET",
      }
    )
      .then((respons) => respons.json())
      .then((data) => {
        // console.log(data);
        setSearchResults([...data.results]);
        setCurrentPage(pageNumber);
      });
  };

  let ActivePage = SearchPage;
  const showView = (page) => {
    switch (page) {
      case "search":
        ActivePage = SearchPage;
        break;
      case "favorites":
        ActivePage = FavoritesPage;
        break;
      default:
        ActivePage = SearchPage;
        break;
    }
  };

  const numberPages = Math.floor(totalDataResult / 16);
  return (
    <div className="App">
      <Header
        searchValue={searchValue}
        searchChangeHandler={(e) => searchChangeHandler(e.target.value)}
        navigate={navigate}
        activePage={activePage}
      />
      <div className="searchPage flex flex-wrap justify-around w-90 center">
        <ActivePage
          searchResults={searchResults}
          favoritesIds={favoritesIds}
          addToFavorites={addToFavorites}
          deleteMovieFavorite={deleteMovieFavorite}
          navigate={navigate}
        />
      </div>

      {/* <div className="  pagnation flex justify-around w-90">
					{this.state.totalDataResult > 16 ? (
						<Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage} />
					) : (
						''
					)}
				</div> */}
      <Footer navigate={navigate} />
    </div>
  );
}
export default App;
