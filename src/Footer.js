import React from "react";
import "./Footer.css";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

function Footer(props) {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="footer">
      <a onClick={handleClick} className="footer__container">
        <KeyboardArrowUpIcon className="footer__icon"/>
        <span className="footer__text">
          <p>Back to top</p>
        </span>
      </a>
    </div>
  );
}

{
  /* <span className="header__optionLineOne">Returns</span> */
}

export default Footer;
