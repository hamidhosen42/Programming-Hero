import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div className="bg-white py-5">
      <div className="gap-5 text-xl font-bold flex justify-center">
        <CustomLink to="/">HOME</CustomLink>
        <CustomLink to="/reviews">REVIEWS</CustomLink>
        <CustomLink to="/dashboard">DASHBOARD</CustomLink>
        <CustomLink to="/blogs">BLOGS</CustomLink>
        <CustomLink to="/about">ABOUT</CustomLink>
      </div>
    </div>
  );
};

export default Header;