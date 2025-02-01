import PropTypes from "prop-types";
import { ListGroupItem } from "reactstrap";

function Subreddit({ subreddit, handleSubreddit, selectedSubreddit }) {
  const handleClick = () => {
    handleSubreddit(subreddit.display_name);
  };

  return (
    <ListGroupItem
      className={selectedSubreddit === subreddit.display_name ? "active" : ""}
      onClick={handleClick}
    >
      <img
        src={subreddit.icon_img}
        className="rounded-circle mx-2 bg-secondary"
        alt={`${subreddit.display_name} image`}
        width="35"
        height="35"
        onError={(e) => {
          e.target.onerror = null; // Prevent infinite loop if placeholder also fails
          e.target.className += " placeholder opacity-75"; // Or remove src entirely
        }}
      ></img>
      {subreddit.display_name}
    </ListGroupItem>
  );
}

Subreddit.propTypes = {
  subreddit: PropTypes.object.isRequired,
  handleSubreddit: PropTypes.func.isRequired,
  selectedSubreddit: PropTypes.string.isRequired,
};

export default Subreddit;
