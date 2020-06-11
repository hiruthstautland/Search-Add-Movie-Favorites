import React from 'react';
import './style.css';

export default class DropDownMenu extends React.Component {
        state = {
            categories        : this.props.categories || [],
            showCategories    : false,
            selectedCategory: this.props.categories && this.props.categories[0],
                    };

    dropDown = () => {
        this.setState(prevState => ({
            showCategories : !prevState.showCategories
        }));
    };
    selectCategory = category =>
        this.setState({
            selectedCategory : category,
            showCategories    : false,
        });     
      render () {
        return (
        <>  
            <div
                style={{
                    display: this.state.showCategories
                    ? 'none'
                    : 'inline-block'
                }}
                className='select-box--heart'
                onClick={this.dropDown}
            >
                <i className='far fa-heart red center-heart' />
            </div>
            <div className='select-box--box'>
                <div className='select-box--container'>
                    <div
                        style={{
                            display: this.state.showCategories
                            ? 'block'
                            : 'none'
                        }}
                        className='select-box--items'
                    >
                        {this.state.categories.map(category => (
                            <div
                                key={category.id}
                                onClick={() => this.selectCategory(category)}
                                className={
                                    this.state.selectedCategory === category 
                                    ? 'selected'
                                    : ''  }
                                >
                                    {category.value}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
        </>
        )
    }
}
