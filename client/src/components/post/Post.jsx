import "./post.scss";
import { Link } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import Comments from "../comments/Comments";
import  moment from "moment";
const Post = ({ post }) => {
  const { userId, name, profilePicture, description, img,createdAt } = post;
  //Tempo
  const [liked, setLiked] = useState(false);
  const [commentOpen, setCommentOpen] = useState(false);
  const handleLike = () => {};
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={profilePicture} alt="" />
            <div className="details">
              <Link
                to={`/profile/${userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{name} </span>
              </Link>
              <span className="date">{moment(createdAt).fromNow()}</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{description}</p>
          <img src={`../uploads/${img}`} alt="" />
        </div>
        <div className="links">
          <div className="link">
            {liked ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
            <span>10 Likes</span>
          </div>
          <div className="link" onClick={() => setCommentOpen(!commentOpen)}>
            <ChatBubbleOutlineOutlinedIcon />
            <span>20 Comments</span>
          </div>
          <div className="link">
            <ShareIcon />
            <span>Share</span>
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
