import React from 'react';
import chair from "../../assets/images/chair.png";
import PrimaryButton from '../Shared/PrimaryButton';
import bgChair from "../../assets/images/bg.png";

const Banner = () => {
    return (
      <div className="hero min-h-screen px-12">
        <img src={bgChair} className="mt-[-100px]" alt="" />
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <img
            src={chair}
            className="max-w-sm rounded-lg shadow-2xl w-50"
            alt="Dentice Chair"
          />
          <div className="pr-10">
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    );
};

export default Banner;