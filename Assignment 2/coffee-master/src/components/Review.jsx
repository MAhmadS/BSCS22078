import React from "react";
import ReviewCard from "./ReviewCard";
import Counter from "./Counter";

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
          <Counter item={{ name: "Happy Client", count: 2536 }} />
          <Counter item={{ name: "Total Projects", count: 7562 }} />
          <Counter item={{ name: "Cups Coffee", count: 2013 }} />
          <Counter item={{ name: "Total Submitted", count: 10536 }} />
        </div>
      </div>
    </section>
  );
};

export default Review;
