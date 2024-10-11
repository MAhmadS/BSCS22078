import React from "react";

const ReviewCard = ({ item }) => {
  return (
    <div className="col-lg-6 col-md-6 single-review">
      <img src="img/r1.png" alt="" />
      <div className="title d-flex flex-row">
        <h4>{item.name}</h4>
        <div className="star">
          {Array.from({ length: item.stars }).map((_, index) => (
            <span className="fa fa-star checked"></span>
          ))}
          {Array.from({ length: 5 - item.stars }).map((_, index) => (
            <span className="fa fa-star"></span>
          ))}
        </div>
      </div>
      <p>{item.description}</p>
    </div>
  );
};

export default ReviewCard;
