import React, { useState, useEffect, useRef } from "react";
import "./style.css";

const DropDownMenu = ({ options, handleClick, btnClass, placholder }) => {
  const node = useRef();

  const [open, setOpen] = useState(false);

  const clickOutside = (e) =>
    node.current.contains(e.target) ? null : setOpen(false);

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    return () => document.removeEventListener("mousedown", clickOutside);
  }, []);

  return (
    <span ref={node} className=" ">
      <button
        type="button"
        className={`${btnClass} pa2 dim bg-transparent white`}
        onClick={() => setOpen(!open)}
      >
        {placholder}
      </button>
      {open && (
        <ul className="self-end z-3 b--light-silver bg-moon-gray near-black dd-list ">
          {options.map((option) => (
            <li
              key={option.id}
              onClick={() => handleClick}
              className="ba b--silver dd-list-elm"
            >
              <input type="checkbox" />
              {option.value}
            </li>
          ))}
        </ul>
      )}
    </span>
  );
};

export default DropDownMenu;
