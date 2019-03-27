import React, { Component } from 'react';
import './App.css';

import LandingPage from './Comp/LandingPage';
import Favorites from './Comp/Favorites';

class App extends Component {
    constructor(props){ //Comes with props as parameter,so call super
        super(props); //; adding/omitting semicolons ; is optional in JS, lets keep doing it for now
        this.state = {
            favorites: []
        }
        this.addToFavorites = this.addToFavorites.bind(this)
    }

    addToFavorites(movie){
        console.log('movie', movie)
        const favorites = [...this.state.favorites, movie]
        this.setState({favorites})
    }

  render() {
    return (
        <div>
            <LandingPage addToFavorites={this.addToFavorites} />
            <Favorites movie={this.state.favorites}/>
        </div>

    );
  }
}

export default App;

