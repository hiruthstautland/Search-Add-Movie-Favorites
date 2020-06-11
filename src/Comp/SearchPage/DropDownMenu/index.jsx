import React, { useState } from "react";
import "./style.css";

const DropDownMenu = (props) => {
  const [categories, setCategories] = useState(props.categories || []);
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const dropDown = () => {
    setShowCategories(!showCategories);
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
    setShowCategories(false);
  };
  return (
    <>
      <div
        style={{
          display: showCategories ? "none" : "inline-block",
        }}
        className="select-box--heart"
        onClick={() => dropDown()}
      >
        <i className="far fa-heart red center-heart" />
      </div>
      <div className="select-box--box">
        <div className="select-box--container">
          <div
            style={{
              display: showCategories ? "block" : "none",
            }}
            className="select-box--items"
          >
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => selectCategory(category)}
                className={selectedCategory === category ? "selected" : ""}
              >
                {category.value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DropDownMenu;
