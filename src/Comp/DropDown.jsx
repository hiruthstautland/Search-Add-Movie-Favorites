import React from "react";

class DropDown extends React.Component {
  state = {
    items: this.props.items || [],
    // showItems: false,
    selectedItem: this.props.items && this.props.items[0],
  };
  // dropDown = () => {
  //     this.setState((prevState) => ({
  //         showItems: !prevState.showItems
  //     }));
  // };

  selectItem = (item) =>
    this.setState({
      selectedItem: item,
      showItems: this.props.showItems,
    });

  render() {
    return (
      <div className="select-box--box ma1">
        <div className="select-box--container">
          <div
            className="select-box--selected-item white"
            onClick={this.props.dropDown}
          >
            <i className="far fa-heart red" />
          </div>
          <div
            style={{
              display: this.props.showItems ? "block" : "none",
            }}
            className="select-box--items white mh2"
          >
            {this.state.items.map((item) => (
              <div
                key={item.id}
                className={
                  this.state.selectedItem === item ? "fas fa-heart" : ""
                }
                onClick={() => this.selectItem(item)}
              >
                {item.value}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default DropDown;
