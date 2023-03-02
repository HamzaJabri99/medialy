import "./post.scss";
import { Link } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReportIcon from "@mui/icons-material/Report";
import { useContext, useState } from "react";
import Comments from "../comments/Comments";
import moment from "moment";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/authContext";

const Post = ({ post }) => {
  const { currentUser } = useContext(AuthContext);
  const { userId, name, profilePicture, description, img, createdAt } = post;
  //Tempo
  const { isLoading, error, data } = useQuery(["likes", post.id], () =>
    makeRequest.get(`/likes?postId=${post.id}`).then((res) => {
      return res.data;
    })
  );
  const {
    isLoading: isLoadingc,
    error: errorc,
    data: datac,
  } = useQuery(["comments", post.id], () =>
    makeRequest.get(`/comments?postId=${post.id}`).then((res) => {
      return res.data;
    })
  );
  const liked = false;
  const [commentOpen, setCommentOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (liked) => {
      if (liked) return makeRequest.delete("/likes?postId=" + post.id);
      return makeRequest.post("/likes", { postId: post.id });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["likes"]);
      },
    }
  );
  const handleLike = () => {
    mutation.mutate(data.includes(currentUser.id));
  };

  const postMutation = useMutation(
    (postId) => {
      return makeRequest.delete(`/posts/${postId}`);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );
  const handleDelete = () => {
    postMutation.mutate(post.id);
  };
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={"../uploads/" + profilePicture} alt="" />
            <div className="details">
              <Link
                to={`/profile/${userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{currentUser.name} </span>
              </Link>
              <span className="date">{moment(createdAt).fromNow()}</span>
            </div>
          </div>
          {currentUser.id === post.userId
            ? menuOpen && (
                <div className="menuActions">
                  <button>update</button>
                  <button onClick={handleDelete}>delete</button>
                </div>
              )
            : menuOpen && (
                <div
                  style={{ padding: "5px", height: "50px" }}
                  className="menuActions"
                >
                  <button
                    style={{
                      backgroundColor: "orange",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <ReportIcon />
                    report?
                  </button>
                </div>
              )}
          <MoreHorizIcon onClick={() => setMenuOpen(!menuOpen)} />
        </div>
        <div className="content">
          <p>{description}</p>
          <img src={`../uploads/${img}`} alt="" />
        </div>
        <div className="links">
          <div className="link">
            {isLoading ? (
              "loading"
            ) : data.includes(currentUser.id) ? (
              <FavoriteIcon style={{ color: "red" }} onClick={handleLike} />
            ) : (
              <FavoriteBorderOutlinedIcon onClick={handleLike} />
            )}
            {data?.length} Likes
          </div>
          <div className="link" onClick={() => setCommentOpen(!commentOpen)}>
            <ChatBubbleOutlineOutlinedIcon />
            <span>{datac?.length} Comments</span>
          </div>
          <div className="link">
            <ShareIcon />
            <span>Share</span>
          </div>
        </div>
        {commentOpen && <Comments postId={post.id} />}
      </div>
    </div>
  );
};

export default Post;
