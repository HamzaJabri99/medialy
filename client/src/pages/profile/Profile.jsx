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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
const Profile = () => {
  const userId = parseInt(useLocation().pathname.split("/")[2]);
  const { currentUser } = useContext(AuthContext);
  const { isLoading, error, data } = useQuery(["user", userId], () =>
    makeRequest.get("/users/find/" + userId).then((res) => {
      return res.data;
    })
  );
  const { isLoading: rIsLoading, data: followshipData } = useQuery(["followship", userId], () =>
    makeRequest.get("/follow?followedUserId=" + userId).then((res) => {
      return res.data;
    })
  );
  const queryClient = useQueryClient();
  const mutation = useMutation((followed) => {
    if (followed) return makeRequest.delete('/follow?userId=' + userId)
    return makeRequest.post('/follow', { userId });
  }, {
    onSuccess: () => { queryClient.invalidateQueries(['followship']) }
  })
  console.log(followshipData);
  const handleFollow = (e) => {
    e.preventDefault();
    mutation.mutate(followshipData.includes(currentUser.id))
  };
  return (
    <div className="profile">
      {error ? (
        <span style={{ color: "red" }}>error</span>
      ) : isLoading ? (
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
                {rIsLoading ? "Loading" : userId === currentUser.id ? (
                  <button>Update</button>
                ) : (
                  <button onClick={handleFollow}>
                    {followshipData.includes(currentUser.id)
                      ? "Following"
                      : "Follow"}
                  </button>
                )}
              </div>
              <div className="right">
                <EmailOutlinedIcon />
                <MoreHorizIcon />
              </div>
            </div>
            <Posts className="posts" userId={userId} />
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
