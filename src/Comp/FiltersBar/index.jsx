import React, { useState, useEffect } from "react";
import DropDownMenu from "./../DropDownMenu";
import { getCategories } from "./../../apis/categoriesApi";

export const FiltersBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loginAge = 6;
    setCategories(getCategories(loginAge).allowedCategories);
  }, []);

  const handleClick = (params) => {
    console.log("Category filter clicked", params);
  };

  return (
    <div className="w-100">
      <DropDownMenu
        btnClass="ba b--white"
        placholder="Categories"
        options={categories}
        handleClick={handleClick}
      />
    </div>
  );
};
