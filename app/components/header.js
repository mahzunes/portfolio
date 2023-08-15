"use client";
import React from "react";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex mr-36 ml-32 mt-8 justify-between">
      <div className="font-semibold ">
        <p>Enes </p>
      </div>

      <div className="flex ">
        <ul className="flex gap-14">
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/abouttwo">
            <li>About</li>
          </Link>
          <Link to="/skills">
            <li>Skills</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
