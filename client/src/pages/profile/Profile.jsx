import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Twitter from "@mui/icons-material/Twitter";
import Posts from "../../components/posts/Posts";
const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/12397937/pexels-photo-12397937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="profilePicture"
        />
      </div>
      <div className="profileContainer">
        <div className="userInfo">
          <div className="left">
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon fontSize="large" />
            </a>
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter fontSize="large" />
            </a>
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon fontSize="large" />
            </a>
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Jabri Hamza</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>MA</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>jabrii.com</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreHorizIcon />
          </div>
        </div>
      </div>
      <Posts className="posts" />
    </div>
  );
};

export default Profile;
