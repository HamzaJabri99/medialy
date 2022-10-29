import "./navbar.scss";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span>ᗰEᗪIᗩᒪY</span>
        </Link>

        <HomeIcon />
        <DarkModeOutlinedIcon />
        <AppsOutlinedIcon />

        <div className="search">
          <SearchOutlinedIcon className="searchIcon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="right">
        <PermIdentityIcon />
        <EmailOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <div className="user">
          <img
            src="https://i.pinimg.com/originals/97/40/76/97407620cac3014482bfbc4a83b1bb4f.jpg"
            alt=""
          />
          <span>Hamza Jabri</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
