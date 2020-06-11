import React from "react";

const Pagination = props => {
  const pageNumber = [];
  for (let i = 1; i <= props.pages + 1; i++) {
    // make the active page bold or mark it
    // let active = props.currentPage == i ? "active" : "";
    pageNumber.push(
      <li className="list" key={i} onClick={() => props.nextPage(i)}>
        <button className="green f4 bg-black bn grow">{i}</button>
      </li>
    );
  }
  return (
    <div className="paginationContainer">
      <ul className=" flex pagination">
        {props.currentPage > 1 ? (
          <li
            className="list"
            onClick={() => props.nextPage(props.currentPage - 1)}
          >
            <button className="green f4 bg-black bn">Previous Page </button>
          </li>
        ) : (
          ""
        )}
        {pageNumber}
        {props.currentPage > 1 ? (
          <li
            className="list"
            onClick={() => props.nextPage(props.currentPage + 1)}
          >
            <button className="green f4 bg-black bn">Next Page </button>
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
};
export default Pagination;
