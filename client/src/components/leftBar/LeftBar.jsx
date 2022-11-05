import "./leftbar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
const LeftBar = () => {
  const {currentUser}=useContext(AuthContext);
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src={currentUser.profilePicture}
              alt=""
            />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" className="icon" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" className="icon" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="" className="icon" />
            <span>Market</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" className="icon" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" className="icon" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src={Events} alt="" className="icon" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" className="icon" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" className="icon" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" className="icon" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" className="icon" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
          <div className="item">
            <img src={Fund} alt="" />
            <span>Fund</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
