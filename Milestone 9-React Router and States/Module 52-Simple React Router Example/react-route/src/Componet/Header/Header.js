import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import "./Header.css";

const Header = () => {
    return (
      <div>
        <h1 className="">Welcome to my fancy Routing!!!</h1>
        <nav className="nav-section">
          <CustomLink to="/home">Home</CustomLink>
          <CustomLink to="/friend">Friend</CustomLink>
          <CustomLink to="/posts">Posts</CustomLink>
          <CustomLink to="/countries">Countries</CustomLink>
          <CustomLink to="/about">About</CustomLink>
        </nav>
      </div>
    );
};

export default Header;