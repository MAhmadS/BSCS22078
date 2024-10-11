import React from "react";

const Card = ({ item }) => {
  return (
    <div className="col-lg-4">
      <div className="single-menu">
        <div className="title-div justify-content-between d-flex">
          <h4>{item.name}</h4>
          <p className="price float-right">{item.price}</p>
        </div>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default Card;
