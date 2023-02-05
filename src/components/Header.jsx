import React from "react";
import headerLogo from "../assets/img/sky-blue.svg";
import { Link } from "react-router-dom";
function Header({ togglePopup }) {
  return (
    <div className="header-apartaments">
      <ul>
        <li>
          <button onClick={togglePopup}>ХОЧЕТЕ ЗАБРОНЮВАТИ АПАРТАМЕНТИ?</button>
        </li>
        <li>
          <Link to="/">
            <img src={headerLogo} alt="header-logo" />
          </Link>
        </li>
        <li>
          <button>
            <Link
              className="header-link"
              target="_blank"
              to="https://t.me/mowproduction"
            >
              ЗАБРОНЮВАТИ ЧЕРЕЗ ТЕЛЕГРАМ!
            </Link>
          </button>
        </li>
      </ul>
    </div>
  );
}
export default Header;
