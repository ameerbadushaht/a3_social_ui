import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from 'react-router-dom';
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";

export default function Topbar({onShowRegister}) {
  const [isClicked, setClicked] = useState(false);

  function clicked() {
    setClicked(!isClicked);
  }

  function imageClick() {
    console.log("image clicked");
  }

  return (
    <div className="topbarContainer">
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon onClick={clicked} className="searchIcon" />
          {isClicked ? (
            <input
            style={{transition:'ease 3s'}}
              placeholder="Search for friend, post or video"
              className="searchInput"
            />
          ) : null}
        </div>
      </div>
      <div className="topbarLeft">
        <span className="logo">A3 Media</span>
      </div>

      <div className="topbarRight">
        <div className="topbarLinks">
          {/* <span className="topbarLink"><Link to="/">Home</Link></span> */}
          <span className="topbarLink">Timeline</span>
         <span> <Link to="/">Home</Link> </span>
         <span> <Link to="/Profile" >Profile</Link> </span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img
          onClick={imageClick}
          src="/assets/person/1.jpeg"
          alt=""
          className="topbarImg"
        />
      </div>
    </div>
  );
}
