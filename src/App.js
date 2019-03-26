import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

import MovieRows from './Comp/MovieRows';
import Footer from './Comp/Footer';

class App extends Component {
    constructor(props){ //Comes with props as parameter,so call super
        super(props); //; adding/omitting semicolons ; is optional in JS, lets keep doing it for now
        this.state = {};
        //console.log('boo from constructor');

        // const movies = [
        //     {id: 0, poster_src:'https://image.tmdb.org/t/p/w185_and_h278_bestv2/bJLYrLIHT1r7cikhWGbpZkxlUpA.jpg',
        //         title: 'Avengers: Endgame', overview: 'After the devastating events of Avengers: Infinity War, '},
        //     {id: 1, poster_src:'https://image.tmdb.org/t/p/w185_and_h278_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg',
        //         title: 'Avengers: Infinity Wars', overview: 'Second overview: the universe is in ruins due to the efforts of the Mad Titan. '},
        // ]
        //
        // let movieRows = [];
        // movies.forEach((movie) =>{
        //     console.log(movie);
        //     const movieRow = <MovieRows movie = {movie} />
        //
        //     movieRows.push(movieRow)
        // })
        // this.state = {rows: movieRows};

        this.performSearch();
    }

    performSearch(){
        console.log('Searching movie db via json');
        const urlAPI = 'https://api.themoviedb.org/3/search/movie?api_key=d9514d5430ca1c39e3e1d6ea86a26697&query=Disney';
        $.ajax({
            url: urlAPI,
            success: (searchResults) =>{    //success calback
                console.log('Fetched the data');
                //console.log(searchResults);
                const results = searchResults.results;

                let movieRows = [];

                results.forEach((movie) =>{
                    console.log(movie.title);
                    const movieRow = <MovieRows movie={movie} />
                    movieRows.push(movieRow);
                })
                this.setState({rows: movieRows})
            },
            error: (xhr, status, err) => {   //google this error callback
                console.error('failed to fetch data');
            }
        })
    }

  render() {
    return (
      <div className="App">
        <table className="navTable">
          <tbody>
          <tr>
            <td>
                <img src="movieDB-logo.svg" width="40" alt="movieDB-logo"/>
            </td>
            <td>
                <h1>Movies and TV Shows Search </h1>
            </td>
            <td>
            </td>
          </tr>
          </tbody>
        </table>
          <div className="searchBar">
          <label htmlFor="searchBarInput">
              <img src="searchIcon.png"  alt="searchICon"/>
          </label>
          <input type="text"
                 id="searchBarInput"
                 placeholder="Search for a movie or TV show..." />
          </div>
          {this.state.rows}
          {/* <Footer/> */ }
      </div>
    );
  }
}

export default App;

