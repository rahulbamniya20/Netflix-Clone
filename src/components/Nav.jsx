import React, { useEffect, useState } from "react";
import "./Nav.css";

import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <>
      <nav className={`nav ${show && "nav__black"}`} id="nav">
        <Link to={"/"}>
          <img
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
            className="nav__logo"
            alt="netflix logo"
            loading="lazy"
          />
        </Link>
        <ul className="nav__links">
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
          <li>
            <NavLink to="/tv">TV Series</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
