import "./posts.scss";
import Post from "../post/Post";

const Posts = () => {
  //Dummy Data

  const posts = [
    {
      id: 1,
      name: "jabri hamza",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/9456549/pexels-photo-9456549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "lorem hya likayna o makayn ma7sn, o fkhatr lkhwater",
      img: "https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "jabri yahya",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/9456549/pexels-photo-9456549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "lorem hya likayna o makayn ma7sn, o fkhatr lkhwater",
      img: "https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <div className="posts">
      {posts &&
        posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
    </div>
  );
};

export default Posts;
