import React from "react";

const MenuCard = ({ menuData }) => {
  

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, category, image, description, price } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-author subtle"> {category}</span>
                    <h2 className="card-title"> {name} </h2>
                    <div>
                      <span className="card-description subtle">
                        {description}
                      </span>
                    </div>
                  </div>
                  <div className="card_image">
                  <img src={image} alt="images not available" className="card-media" />
                  </div>
                  <span className="card-tag  subtle">Order Now</span>
                  <span className="card-price subtle"> {price}</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
