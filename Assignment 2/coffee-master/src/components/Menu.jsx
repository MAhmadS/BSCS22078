import React from "react";
import Card from "./Card";

const Menu = () => {
  const cardItem = [
    {
      name: "Cappuccino",
      price: "$49",
      description:
        "Usage of the Internet is becoming more common due to rapid advance.",
    },
    {
      name: "Americano",
      price: "$49",
      description:
        "Usage of the Internet is becoming more common due to rapid advance.",
    },
    {
      name: "Espresso",
      price: "$49",
      description:
        "Usage of the Internet is becoming more common due to rapid advance.",
    },
    {
      name: "Macchiato",
      price: "$49",
      description:
        "Usage of the Internet is becoming more common due to rapid advance.",
    },
    {
      name: "Mocha",
      price: "$49",
      description:
        "Usage of the Internet is becoming more common due to rapid advance.",
    },
    {
      name: "Coffee Latte",
      price: "$49",
      description:
        "Usage of the Internet is becoming more common due to rapid advance.",
    },
    {
      name: "Piccolo Latte",
      price: "$49",
      description:
        "Usage of the Internet is becoming more common due to rapid advance.",
    },
    {
      name: "Ristretto",
      price: "$49",
      description:
        "Usage of the Internet is becoming more common due to rapid advance.",
    },
    {
      name: "Affogato",
      price: "$49",
      description:
        "Usage of the Internet is becoming more common due to rapid advance.",
    },
  ];
  return (
    <section className="menu-area section-gap" id="coffee">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-60 col-lg-10">
            <div className="title text-center">
              <h1 className="mb-10">What kind of Coffee we serve for you</h1>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
          </div>
        </div>
        <div className="row">
          {cardItem.map((item) => (
            <Card item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
