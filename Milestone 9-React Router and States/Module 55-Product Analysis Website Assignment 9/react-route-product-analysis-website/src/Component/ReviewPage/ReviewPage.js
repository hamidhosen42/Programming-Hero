import React from "react";
import useReviews from "../../CustomHook/useReviews";
import ReviewCart from "../ReviewCart/ReviewCart";

import { Outlet, Link } from "react-router-dom";

const ReviewPage = () => {
  const [reviews, setReview] = useReviews();
  return (
    <div>
      <div className="grid mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
        {reviews.map((review) => (
          <ReviewCart review={review} key={review.id}></ReviewCart>
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
