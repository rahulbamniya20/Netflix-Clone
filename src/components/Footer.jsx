import { Link } from "react-router-dom";

import bg from "../assests/footer-bg.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <Link to={"/"}>
          <img
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
            style={{width:'200px'}}
            alt="netflix logo"
            loading="lazy"
          />
        </Link>
          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">Term of services</Link>
            <Link to="/">About us</Link>
          </div>
        </div>

        <h2 style={{ textAlign: "center", backgroundColor: "teal" }}>
          Made By Rahul 
        </h2>
      </div>
    </div>
  );
};

export default Footer;
