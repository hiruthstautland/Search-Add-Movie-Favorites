import React from 'react';

export default class Favorites extends React.Component {
    constructor(props){ //Comes with props as parameter,so call super
        super(props); //; adding/omitting semicolons ; is optional in JS, lets keep doing it for now
        this.state = {
            favorites: []
        }
        this.addToFavorites = this.addToFavorites.bind(this)
    }
    total(){
        return this.props.movie((total, movie) =>{
            return total
        }, 0)
    }
    render() {
        if(this.props.movie.length === 0){
            return <div>
                <h2>You have no favorites! </h2>
            </div>
        }
        return(
            <div className="container">
                <table key={this.props.movie.id}
                       id="movieCard" >
                    <tbody>
                    <tr>
                        <td>
                            <img src={this.props.movie.poster_src}
                                 alt="Movie Poster"
                                 width="120"
                                 id="MovieCover"
                            />
                        </td>
                        <td>
                            <h3>{this.props.movie.title}</h3>
                            <p>{this.props.movie.overview}</p>
                            <input type="button"
                                   value="Remove From Favorites"
                                   className="formBtn"
                                   onClick={this.viewMovie}
                            />
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div className="total">
                    All Favorites: {this.total()}
                </div>
            </div>
        );
    }
}

