import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

import "./stories.scss";

const Stories = () => {
  //dummy data
  const { currentUser } = useContext(AuthContext);
  const stories = [
    {
      id: "1",
      name: "Jabri Hamza",
      img: "https://images.pexels.com/photos/13313434/pexels-photo-13313434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "2",
      name: "Jabri Hamza",
      img: "https://images.pexels.com/photos/13313434/pexels-photo-13313434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "3",
      name: "Jabri Hamza",
      img: "https://images.pexels.com/photos/13313434/pexels-photo-13313434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "4",
      name: "Jabri Hamza",
      img: "https://images.pexels.com/photos/13313434/pexels-photo-13313434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.img} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories &&
        stories.map((story) => {
          return (
            <div className="story" key={story.id}>
              <img src={story.img} alt="" />
              <span>{story.name}</span>
            </div>
          );
        })}
    </div>
  );
};

export default Stories;
