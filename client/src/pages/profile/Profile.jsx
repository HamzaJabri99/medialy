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
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
const Profile = () => {
  const userId = parseInt(useLocation().pathname.split("/")[2]);
  const { currentUser } = useContext(AuthContext);
  const { isLoading, error, data } = useQuery(["user"], () =>
    makeRequest.get("/users/find/" + userId).then((res) => {
      return res.data;
    })
  );
  console.log(data);
  return (
    <div className="profile">
      {isLoading ? (
        <span style={{ color: "inherit" }}>Loading...</span>
      ) : (
        <>
          <div className="images">
            <img src={data?.coverPicture} alt="" className="cover" />
            <img src={data?.profilePicture} alt="" className="profilePicture" />
          </div>
          <div className="profileContainer">
            <div className="uInfo">
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
                <span>{data?.username}</span>
                <div className="info">
                  <div className="item">
                    <PlaceIcon />
                    <span>{data?.city}</span>
                  </div>
                  <div className="item">
                    <LanguageIcon />
                    <span>{data?.website}</span>
                  </div>
                </div>
                {currentUser.id === userId ? (
                  <button>Update</button>
                ) : (
                  <button>Follow</button>
                )}
              </div>
              <div className="right">
                <EmailOutlinedIcon />
                <MoreHorizIcon />
              </div>
            </div>
            <Posts className="posts" />
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
