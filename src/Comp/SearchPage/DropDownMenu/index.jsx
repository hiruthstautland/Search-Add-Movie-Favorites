import React from "react";
import "./style.css";

const DropDownMenu = ({ categories, handleClick, selectedCategory }) => {
  return (
    <div className="w-50 self-end z-3 b--light-silver bg-moon-gray near-black">
      {categories.map((category) => (
        <div
          key={category.id}
          onClick={() => handleClick(category.value)}
          className={
            selectedCategory === category
              ? "text-bold bb"
              : "bb dim pointer pa1"
          }
        >
          {category.value}
        </div>
      ))}
    </div>
  );
};

export default DropDownMenu;
