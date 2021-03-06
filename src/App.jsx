import React, { useState, useEffect } from "react";
import "./App.css";
import * as debounce from "lodash.debounce";
import * as api from "./Comp/movieApi";
import Header from "./Comp/Header/index";
import { FiltersBar } from "./Comp/FiltersBar";
import SearchPage from "./Comp/SearchPage";
import FavoritesPage from "./Comp/FavoritesPage";
import Footer from "./Comp/Footer";
// import Pagination from './Comp/Pagination';

function App() {
  const [activePage, setActivePage] = useState("search");
  const [favoritesObj, setfavoritesObj] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalDataResult, setTotalDataResult] = useState(0);

  useEffect(() => {
    showView(activePage);

    if (searchValue != searchValue) {
      performSearch(searchValue);
    }
  }, [activePage]);

  const searchChangeHandler = debounce((searchValue) => {
    setSearchValue(searchValue);
    if (searchValue.length > 2) {
      performSearch(searchValue);
    }
  }, 200);

  const performSearch = (searchValue) => {
    if (searchValue) {
      api.search(searchValue).then((data) => {
        setSearchResults([...data.results]);
        setTotalDataResult(data.total_results);
      });
    }
  };

  const addToFavorites = (movieObj, toList) => {
    // // se if category exist category/list
    // let categoryExist = categories.hasOwnProperty(toList);
    // categoryExist
    //   ? Object.assign({}, categories[toList], toList)
    //   : (categories[toList] = toList);
    // console.log(categories);
    // // let categoryExist = categories.filter((cat) => {
    // //   return cat.value === toList;
    // // });
    // let addToCategory = { movieObj };
    // // categoryExist.length ?
    // // setfavoritesObj([...favoritesObj, addToCategory]) :
    // console.log(categoryExist);
  };

  const deleteMovieFavorite = (movieId) => {
    setfavoritesObj(
      favoritesObj.filter(function (movie) {
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
      <FiltersBar />
      <div className="searchPage flex flex-wrap justify-around w-90 center">
        <ActivePage
          searchResults={searchResults}
          favoritesObj={favoritesObj}
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
