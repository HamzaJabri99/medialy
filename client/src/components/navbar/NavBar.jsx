import "./navbar.scss";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
const NavBar = () => {
  const { darkMode, toggleTheme } = useContext(DarkModeContext);
  const [openOptions, setOpenOptions] = useState(false);
  const { currentUser, logout } = useContext(AuthContext);
  const nav = useNavigate();
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout();
      nav("/login");
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <div className="navbar">
      <div className="left">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span>ᗰEᗪIᗩᒪY</span>
        </Link>

        <HomeIcon />

        {!darkMode ? (
          <DarkModeOutlinedIcon onClick={toggleTheme} />
        ) : (
          <WbSunnyOutlinedIcon onClick={toggleTheme} />
        )}

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
        <div className="user" onClick={() => setOpenOptions(!openOptions)}>
          <img src={currentUser?.profilePicture} alt="" />
          <span>{currentUser?.username}</span>
        </div>
        {openOptions && (
          <div className="userOptions">
            <Link to={`/profile/${currentUser?.id}`} className="links">
              <span>Profile</span>
            </Link>
            <form action="">
              <Link onClick={handleLogout}>Log out</Link>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
