import React from 'react';
const Header = (props) => {
    return (
        <div className='flex justify-between'>
            <div className='fl flex w-50 self-center'>
                <button className='dim bn headerBg' onClick={() => props.navigate('search')}>
                    <img className='w3 pa3' src='MDB-logo.png' alt='movieDB-logo' />
                </button>
                <button className='bn headerBg ttu green self-center' onClick={() => props.navigate('search')}>
                    <h2>Movies and TV Search </h2>
                </button>
            </div>
            <div className='flex fl w-50 self-center'>
                <div className='searchBar flex self-center items-end bb b--white w-70 ma2'>
                    <input
                        type='text'
                        minLength='2'
                        maxLength='30'
                        className='searchBarInput white w-90 center'
                        value={props.searchValue}
                        onChange={props.searchChangeHandler}
                        placeholder='Search'
                    />
                    <img src='searchIcon.png' alt='searchIcon' className='h2 pa1' />
                </div>
                <button
                    type='button'
                    className='br3 bn bg-green dim white pa2 ma3 '
                    onClick={() => props.navigate('favorites')}
                >
                    My Movies
                </button>
            </div>
        </div>
    );
};
export default Header;
