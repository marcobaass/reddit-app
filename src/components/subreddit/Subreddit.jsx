import PropTypes from "prop-types";
import { ListGroupItem } from "reactstrap";
import styles from "./Subreddit.module.css";

function Subreddit({ subreddit, handleSubreddit, selectedSubreddit }) {
  const { display_name, icon_img } = subreddit;
  const handleClick = () => {
    handleSubreddit(subreddit.display_name);
  };

  return (
    <ListGroupItem
      className={`${styles.subredditItem} ${selectedSubreddit === display_name ? "active" : ""}`}
      onClick={handleClick}
      data-bs-dismiss="offcanvas"
    >
      {display_name === "all" ? (
        <span
          className=" d-inline-flex align-items-center rounded-circle mx-2"
          style={{
            width: 35,
            height: 35,
            fontSize: "2.25rem",
          }}
        >
          <i className="bi bi-reddit"></i>
        </span>
      ) : (
        icon_img ? (
          <img
            src={icon_img}
            className="rounded-circle mx-2 bg-secondary"
            alt={`${display_name} image`}
            width="35"
            height="35"
            onError={(e) => {
              e.target.onerror = null;
              e.target.className += " placeholder opacity-75";
            }}
          />
        ) : (
          <span className="bi bi-reddit mx-2 opacity-50" style={{ fontSize: "2.25rem" }}></span>
        )
      )}
      <span className="text-capitalize">{display_name}</span>
    </ListGroupItem>
  );
}

Subreddit.propTypes = {
  subreddit: PropTypes.object.isRequired,
  handleSubreddit: PropTypes.func.isRequired,
  selectedSubreddit: PropTypes.string.isRequired,
};

export default Subreddit;
