import React, { Component } from 'react';
import './App.css';

class App extends Component {
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
      </div>
    );
  }
}

export default App;

