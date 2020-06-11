import React from "react";
import "./App.css";
import * as debounce from "lodash.debounce";
import * as api from "./Comp/movieApi";
import Header from "./Comp/Header/Header";
import Favorites from "./Comp/Favorites";
import Footer from "./Comp/Footer";
// import Pagination from './Comp/Pagination';
import Search from "./Comp/SearchPage/Search";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: "search",
      favoritesIds: [],
      searchValue: "",
      searchResults: [],
      currentPage: 1,
      totalDataResult: 0,
    };
    this.addToFavorites = this.addToFavorites.bind(this);
    this.deleteMovieFavorite = this.deleteMovieFavorite.bind(this);
    this.navigate = this.navigate.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  searchChangeHandler = debounce((searchValue) => {
    this.setState({ searchValue });
    this.performSearch(searchValue);
  }, 500);

  performSearch(searchValue) {
    if (searchValue) {
      api.search(searchValue).then((data) => {
        this.setState({
          searchResults: [...data.results],
          totalDataResult: data.total_results,
        });
      });
    }
  }
  componentDidMount() {
    this.performSearch(this.searchValue);
  }
  componentDidUpdate(searchValue) {
    if (searchValue !== this.state.searchValue) {
      this.performSearch(this.state.searchValue);
    }
  }
  addToFavorites(movieId) {
    this.setState({
      favoritesIds: this.state.favoritesIds.concat([movieId]),
    });
  }
  // addToCategory(category){
  // 	this.setState({
  // 		category: this.state
  // 	})
  // }

  deleteMovieFavorite(movieId) {
    this.setState({
      favoritesIds: this.state.favoritesIds.filter(function (movie) {
        return movie !== movieId;
      }),
    });
  }
  navigate = (pageName) => {
    this.setState({ activePage: pageName });
  };
  nextPage = (pageNumber) => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=" +
        api.movieApi +
        "&query=" +
        this.state.searchValue +
        "&page=" +
        pageNumber,
      {
        method: "GET",
      }
    )
      .then((respons) => respons.json())
      .then((data) => {
        console.log(data);
        this.setState({
          searchResults: [...data.results],
          currentPage: pageNumber,
        });
      });
  };
  render() {
    const numberPages = Math.floor(this.state.totalDataResult / 16);
    return (
      <div className="App">
        <Header
          searchValue={this.searchValue}
          searchChangeHandler={(e) => this.searchChangeHandler(e.target.value)}
          navigate={this.navigate}
          activePage={this.activePage}
        />
        <div className="searchPage flex flex-wrap justify-around w-90 center">
          {this.state.activePage === "search" && (
            <>
              {this.state.searchResults.map((movieObj) => (
                <Search
                  key={movieObj.id}
                  movieObj={movieObj}
                  favoritesIds={this.state.favoritesIds}
                  addToFavorites={this.addToFavorites}
                  deleteMovieFavorite={this.deleteMovieFavorite}
                />
              ))}
            </>
          )}
        </div>
        <div className="favoritePage flex flex-wrap justify-around w-90 center">
          {this.state.activePage === "favorites" && (
            <>
              {this.state.favoritesIds.map((movieId) => (
                <Favorites
                  key={movieId}
                  movieId={movieId}
                  favoritesIds={this.state.favoritesIds}
                  deleteMovieFavorite={this.deleteMovieFavorite}
                />
              ))}
              {this.state.favoritesIds.length >= 1 ? (
                <button
                  type="button"
                  className="br3 bn dim pa2 ma3 bg-green white"
                  value="press me"
                  onClick={() => this.navigate("Search")}
                >
                  Back To Search
                </button>
              ) : (
                <button
                  type="button"
                  className="dim bg-green white br3 bn pa2 ma3"
                  onClick={() => this.navigate("Search")}
                >
                  <h1>No Saved Favorites, (Back to search)</h1>
                </button>
              )}
            </>
          )}
        </div>
        {/* <div className="  pagnation flex justify-around w-90">
					{this.state.totalDataResult > 16 ? (
						<Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage} />
					) : (
						''
					)}
				</div> */}
        <Footer navigate={this.navigate} />
      </div>
    );
  }
}
