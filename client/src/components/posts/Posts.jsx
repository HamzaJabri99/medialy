import "./posts.scss";
import Post from "../post/Post";
import { useQuery } from "@tanstack/react-query"; 
import { makeRequest } from "../../axios.js";
const Posts = () => {
  const {isLoading,error,data}=useQuery(["posts"],()=>{
makeRequest.get('/posts').then(res=>{
  return res.data;
})
  })
  return (
    <div className="posts">
      {data &&
        data.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
    </div>
  );
};

export default Posts;
