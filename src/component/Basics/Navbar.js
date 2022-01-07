import React from "react";

const navbar = ({ filterItem, menuList }) => {
  return (
    <>
    <div>
      <header>
          <h1> Welcome Food Lovers</h1>
      </header>
    </div>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}>
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default navbar;
