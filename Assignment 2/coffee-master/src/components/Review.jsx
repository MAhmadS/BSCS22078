import React from "react";
import ReviewCard from "./ReviewCard";

const Review = () => {
  const reviewItems = [
    {
      name: "lorem ipusm",
      description:
        "Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.",
      stars: 3,
    },
    {
      name: "lorem ipusm",
      description:
        "Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.",
      stars: 2,
    },
  ];
  return (
    <section className="review-area section-gap" id="review">
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
          {reviewItems.map((item) => (
            <ReviewCard item={item} />
          ))}
        </div>
        <div className="row counter-row">
          <div className="col-lg-3 col-md-6 single-counter">
            <h1 className="counter">2536</h1>
            <p>Happy Client</p>
          </div>
          <div className="col-lg-3 col-md-6 single-counter">
            <h1 className="counter">7562</h1>
            <p>Total Projects</p>
          </div>
          <div className="col-lg-3 col-md-6 single-counter">
            <h1 className="counter">2013</h1>
            <p>Cups Coffee</p>
          </div>
          <div className="col-lg-3 col-md-6 single-counter">
            <h1 className="counter">10536</h1>
            <p>Total Submitted</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
