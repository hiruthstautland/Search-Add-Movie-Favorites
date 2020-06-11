import React from 'react';
import DropDownMenu from './DropDownSelectionBox/DropDownTemplate';

export default class Search extends React.Component {
    state = {
        movie : this.props.movieObj
    };

    dropDown = () => {
        this.setState(prevState => ({
            showItems : !prevState.showItems
        }));
    };
    render () {
        const movieObj = this.state.movie;
        return (
            <div className='movieCard-container h2 ma2 '>
                <div className='movieCard br1'>
                    <div className='front'>
                        <img
                            alt='Movie Poster'
                            width='100%'
                            src={
                                'https://image.tmdb.org/t/p/w185/' +
                                movieObj.poster_path
                            }
                        />
                    </div>
                    <div className='back'>
                        <div className='title white'>
                            <b>{movieObj.title}</b>
                            <br />
                            <p>{movieObj.overview}</p>
                        </div>
                    </div>
                </div>
                <div className='movieCardFooter flex w-100'>
                    <div className='movieCardButtons flex justify-between w-100'>
                        <div className='movieButton-dropDown'>
                            {!this.props.favoritesIds.includes(movieObj.id) ? (
                                // <button
                                //     type='submit'
                                //     className='bn br2 dim headerBg white'
                                //     onClick={() =>
                                //         this.props.addToFavorites(movieObj.id)}
                                // >

                                // </button>
                                <DropDownMenu
                                    width={300}
                                    categories={[
                                        { value: 'Romance', id: 1 },
                                        { value: 'Comedy', id: 2 },
                                        { value: 'Action', id: 3 },
                                        { value: 'Documentary', id: 4 },
                                        { value: 'Children', id: 5 }
                                    ]}
                                    className='DropDownMenu'
                                />
                            ) : (
                                <button
                                    type='submit'
                                    className='bn br2 dim headerBg'
                                    onClick={() =>
                                        this.props.deleteMovieFavorite(
                                            movieObj.id
                                        )}
                                >
                                    <i className='fas fa-heart red' />
                                </button>
                            )}
                        </div>
                        <div className='movieButton-info'>
                            <button className='bn br2 h2 dim headerBg white mr1'>
                                <a
                                    href={
                                        'https://www.themoviedb.org/movie/' +
                                        movieObj.id
                                    }
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='headerBg white link'
                                >
                                    Info
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
