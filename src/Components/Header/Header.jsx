
import "./Header.css";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import NetflixLogo from "../../assets/images/Netflix_2015_logo.svg.png";
import NetflixLogo from "../../assets/images/Netflix_2015_logo.svg";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

// import NetflixLogo from "../../assets/images/Netflix_2015_logo.svg";

function Header() {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>{<img src={NetflixLogo} alt="" />}</li>
            <li>Netflix</li>
            <li>Home</li>
            <li>DOMone</li>
            <li>TVShow</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Header;
