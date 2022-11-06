import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { makeRequest } from "../../axios";
import moment from "moment";
const Comments = ({postId}) => {
  const { currentUser } = useContext(AuthContext);
 const {isLoading,error,data}=useQuery(["comments"],()=>
 makeRequest.get("/comments?postId="+postId).then((res)=>{
  return res.data;
 }));
 console.log(data);
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.img} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
       {error?<span style={{color:"red"}}>error fetching comments</span>: isLoading?'Loading...': data.map((comment) => (
        <div className="comment" key={comment.id}>
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.description}</p>
          </div>
          <span className="date">{moment(comment.createdAt).fromNow()}</span>
        </div>
      ))} 
    </div>
  );
};

export default Comments;
