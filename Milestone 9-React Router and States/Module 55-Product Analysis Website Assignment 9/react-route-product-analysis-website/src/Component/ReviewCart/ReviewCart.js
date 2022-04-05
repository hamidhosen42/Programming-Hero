import React from 'react';
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReviewCart = (props) => {
    const{name,img,title,rating}=props.review;
    return (
      <div className="shadow-lg rounded-2xl w-[250px] bg-white p-4">
        <div>
          <img src={img} alt="" srcset="" />
        </div>
        <h2 className="text-xl font-bold flex justify-center m-5">
          Name : {name}
        </h2>
        <p className="flex justify-center mt-5 mb-5">{title}</p>
        <Rating
          initialRating={rating}
          emptySymbol={<FontAwesomeIcon icon={faStar} />}
          fullSymbol={
            <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
          }
          readonly
        ></Rating>
        ;
      </div>
    );
};

export default ReviewCart;