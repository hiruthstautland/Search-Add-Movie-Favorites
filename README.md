component did mouth etc...
react hooks function App(){
etc..
}
esg: prevState etc...

deleted dev-test branch : git checkout a0d6d4f and you can view deleted files
rette alle røde warnings
-------------
Layout
- make sure text(back) has same padding as moviePoster
- add {movieObj.title} to back*
*- increase padding around movieCardFooter
- decrease bottom padding, margin 
- add a 'turnover' top right corner.
- Find nice style to bottoms
--------------
Components 'all' pages:
    Header
    -
    -
    Footer
--------
Functionality
- Heart onClick to open Dropdown menu with groups:
    Add to: (get categories from netflix or hbo)
        - Watch later
        - Action
        - RomCom
        - Comedy
        - Documentaries
        - Children
        - etc
-------------
Landing Page (components):
    Suggestions:
        - New Movies 2019++
        (results.filter(release_date: 2019 ))

        - Popular Movies (.results.(filter).(popularity.over 7) )

        - Categories
        (results.filter(genre_ids.[]))
        - My movies
        fetchMyMovies
--------------
Search (Components)
    - fetchedMovies
    - Pagination
        - fix, show only 2+/- from active page
        - active page to be bold, underlined and green
----------------
Favorites (Components)
    - My Movies
        - Heart,WatchLater
        - Categories
        - Back to search

---------
---------------------------------------------------------------------------------------
import React from 'react';
import './style.css';

class SelectDropDown extends React.Component {
    state = {
        items        : this.props.items || [],
        showItems    : false,
        selectedItem : this.props.items && this.props.items[0]
    };

    dropDown = () => {
        this.setState(prevState => ({
            showItems : !prevState.showItems
        }));
    };

    selectItem = item =>
        this.setState({
            selectedItem : item,
            showItems    : false
        });

    render () {
        return (
            <div style={{ width: this.props.width || 160 }}>
                <div className='select-box--box'>
                    <div className='select-box--container'>
                        <div className='select-box--selected-item'>
                            <b>{this.state.selectedItem.value}</b>
                        </div>
                        <div
                            className='select-box--arrow'
                            onClick={this.dropDown}
                        >
                            <span
                                className={`${this.state.showItems
                                    ? 'select-box--arrow-up'
                                    : 'select-box--arrow-down'}`}
                            />
                        </div>
                        <div
                            style={{
                                display : this.state.showItems
                                    ? 'block'
                                    : 'none'
                            }}
                            className='select-box--items'
                        >
                            {this.state.items.map(item => (
                                <div
                                    key={item.id}
                                    onClick={() => this.selectItem(item)}
                                    className={
                                        this.state.selectedItem === item ? (
                                            'selected'
                                        ) : (
                                            ''
                                        )
                                    }
                                >
                                    {item.value}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default SelectDropDown;
