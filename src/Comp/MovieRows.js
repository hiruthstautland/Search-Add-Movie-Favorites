import React from 'react';

export default class MovieRows extends React.Component {
    viewMovie(){
        //console.log(this.props.movie.title);
        const url = 'https://www.themoviedb.org/movie/'+this.props.movie.id;
        window.location.href = url;
    }
    render() {
        return(
            <table key={this.props.movie.id}>
            <tbody>
            <tr>
                <td>
                    <img src={this.props.movie.poster_src} alt="Movie Poster" width="100" />
                </td>
                <td>
                    <h3> {this.props.movie.title} </h3>
                    <p>{this.props.movie.overview}</p>
                    <input type="button"
                           value="Add to Favorites"
                           onClick={this.viewMovie}
                    />
                    <input type="button"
                           value="View Movie"
                           onClick={this.viewMovie.bind(this)}
                    />
                </td>
            </tr>
            </tbody>
        </table>
    );
    }
}

