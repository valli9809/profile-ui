import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "../styles/name.scss";

const name = () => {
  return (
    <div className="content">
      <div className="person-name">
        <h1>Jeremey Rose</h1>
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
      </div>
  );
};
export default name;
