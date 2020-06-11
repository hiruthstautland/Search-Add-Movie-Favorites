import React from 'react';
import * as api from './movieApi';

export default class MovieCard extends React.Component {
    // static propTypes = {}; ????
    state = {
        movie: []
    };
    fetchMovie = (movieId) => {
        console.log('fetching movieId (favorites)', movieId);
        api.fetchMovie(movieId).then((movie) => {
            console.log('favorite movie', movieId);
            this.setState({
                movie: movie
            });
        });
    };
    componentDidMount() {
        this.fetchMovie(this.props.movieId);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.movieId !== this.props.movieId) {
            this.fetchMovie(this.props.movieId);
        }
    }
    render() {
        const movieObj = this.state.movie;
        return (
            <div className='movieCard-container h2 ma2 '>
                <div className='movieCard br1'>
                    <div className='front'>
                        <img
                            alt='Movie Poster'
                            width='100%'
                            src={'https://image.tmdb.org/t/p/w185/' + movieObj.poster_path}
                        />
                    </div>
                    <div className='back'>
                        <b>{movieObj.title}</b>
                        <div className='text white'>
                            <p>{movieObj.overview}</p>
                        </div>
                    </div>
                </div>
                <div className='movieCardFooter flex fl justify-between pa1 ma2 w-100'>
                    <div className='movieCardButtons'>
                        {!this.props.favoritesIds.includes(movieObj.id) ? (
                            <button
                                type='submit'
                                className='bn br2 h3 dim headerBg white ma1'
                                onClick={() => this.props.addToFavorites(movieObj.id)}
                            >
                                <i className='far fa-heart' />
                            </button>
                        ) : (
                            <button
                                type='submit'
                                className='bn br2 h3 dim bg-red white ma1'
                                onClick={() => this.props.deleteMovieFavorite(movieObj.id)}
                            >
                                <i className='fas fa-heart' />
                            </button>
                        )}
                        <button className='bn br2 h2 dim headerBg white ma1'>
                            <a
                                href={'https://www.themoviedb.org/movie/' + movieObj.id}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='white link'
                            >
                                Info
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
