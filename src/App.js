import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props){ //Comes with props as parameter,so call super
        super(props); //; adding/omitting semicolons ; is optional in JS, lets keep doing it for now
        console.log('boo');

        this.state = {
            rows: [
                <p key={1}>This is state row 2 </p>,
                <p key={2}>This is state row 4 </p>,
                <p key={3}>This is state row 6</p>
            ]

        }
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
      </div>
    );
  }
}

export default App;

