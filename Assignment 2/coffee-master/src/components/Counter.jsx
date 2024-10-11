import React from "react";

const Counter = ({item}) => {
  return (
    <div className="col-lg-3 col-md-6 single-counter">
      <h1 className="counter">{item.count}</h1>
      <p>{item.name}</p>
    </div>
  );
};

export default Counter;
