import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";
import "./comments.scss";
const Comments = () => {
  //Dummy Data
  const comments = [
    {
      id: 1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident libero ex consectetur perspiciatis commodi hic, unde odio? Vel voluptate placeat eum corrupti harum, facilis, blanditiis dolorem laborum dolore accusantium ad.",
      name: "jabri mehdi",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/3295209/pexels-photo-3295209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident libero ex consectetur perspiciatis commodi hic, unde odio? Vel voluptate placeat eum corrupti harum, facilis, blanditiis dolorem laborum dolore accusantium ad.",
      name: "jabri oussama",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/2403840/pexels-photo-2403840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.img} alt="" />
        <input type="text" name="" id="" placeholder="Leave a comment" />
        <button>Comment</button>
      </div>
      {comments &&
        comments.map((comment) => {
          return (
            <div className="comment" key={comment.id}>
              <img src={comment.profilePicture} alt="" />

              <div className="info">
                <Link
                  to={`/profile/${comment.userId}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <span>{comment.name}</span>
                </Link>
                <p className="description">{comment.description}</p>
              </div>
              <span className="date">2 hours ago</span>
            </div>
          );
        })}
    </div>
  );
};

export default Comments;
