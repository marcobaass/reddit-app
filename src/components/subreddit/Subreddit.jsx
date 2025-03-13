import PropTypes from "prop-types";
import styles from "./Subreddit.module.css";

function Subreddit({ subreddit, handleSubreddit, selectedSubreddit }) {
  const { display_name, icon_img } = subreddit;
  const handleClick = () => {
    handleSubreddit(subreddit.display_name);
  };

  return (
    <ul
      className={`${styles.subredditItem} ${selectedSubreddit === display_name ? "active" : ""}`}
      onClick={handleClick}
      data-bs-dismiss="offcanvas"
    >
      {display_name === "all" ? (
        <span
          className={styles.logos}
        >
          <i className="bi bi-reddit"></i>
        </span>
      ) : (
        icon_img ? (
          <img
            src={icon_img}
            className={styles.icons}
            alt={`${display_name} image`}
            width="35"
            height="35"
            onError={(e) => {
              e.target.onerror = null;
              e.target.className += " placeholder opacity-75";
            }}
          />
        ) : (
          <span
            className={styles.logos}
          >
            <i className="bi bi-reddit"></i>
          </span>
        )
      )}
      <span className={`text-capitalize ${styles.text}`}>{display_name}</span>
    </ul>
  );
}

Subreddit.propTypes = {
  subreddit: PropTypes.object.isRequired,
  handleSubreddit: PropTypes.func.isRequired,
  selectedSubreddit: PropTypes.string.isRequired,
};

export default Subreddit;
