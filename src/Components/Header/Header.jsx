import "./Header.css";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NetflixLogo from "../../assets/images/Netflix_2015_logo.svg";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>
              <img src={NetflixLogo} alt="Netflix" />
            </li>
            <li className="header_brand">Netflix</li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>My List</li>
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
