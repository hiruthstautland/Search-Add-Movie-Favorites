import React from "react";
import "./style.css";

const DropDownMenu = ({ categories, handleClick, selectedCategory }) => {
  return (
    // <span className="select-box--box ">
    <span className="w-50 self-end">
      {/* <div className="select-box--container"> */}
      <div className="select-box--items bg-near-white near-black">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => handleClick(category.value)}
            className={selectedCategory === category ? "text-bold" : ""}
          >
            {category.value}
          </div>
        ))}
      </div>
    </span>
    // </div>
    // </span>
  );
};

export default DropDownMenu;
