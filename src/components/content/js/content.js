import "../styles/content.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Content = () => {
  return (
    <div className="content">
      <div className="person-name">
        <h1>Jermey Rose</h1>
      </div>
      <div className="location">
        <p> New York,NY </p>
      </div>
      <div className="Book">
        <FontAwesomeIcon icon={faBookmark} className="bookmark" />
        <p> Bookmark </p>
      </div>
      <div className="person-designation">
        <p> Product Designer </p>
      </div>
      <div className="ranking">
        <p>RANKINGS</p>
      </div>
      <div className="ra-text">
        <h1>8,6</h1>
      </div>
      <div className="ratings">
        <FontAwesomeIcon icon={faStar} className="star" />
        <FontAwesomeIcon icon={faStar} className="star" />
        <FontAwesomeIcon icon={faStar} className="star" />
        <FontAwesomeIcon icon={faStar} className="star" />
        <FontAwesomeIcon icon={faStar} className="star" />
      </div>
      <div className="icons">
        <div className="messages">
          <FontAwesomeIcon icon={faMessage} className="message" />
          <h5>Message</h5>
        </div>
        <div className="contacts">
          <FontAwesomeIcon icon={faCheck} className="check" />
          <h6>Contacts</h6>
        </div>
        <div className="reportUser">
          <h6>Report User</h6>
        </div>
      </div>
      <div className="TimeLineIcon">
        <FontAwesomeIcon icon={faEye} className="eye" />
      </div>
      <div className="timeline">
        <p> Timeline </p>
      </div>
      <div className="About">
        <FontAwesomeIcon icon={faUser} className="uaer" />
        <p> About </p>
      </div>
    </div>
  );
};

export default Content;
