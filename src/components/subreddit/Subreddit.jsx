import PropTypes from "prop-types";
import { ListGroupItem } from "reactstrap";
import { useState } from "react";

function Subreddit({ subreddit }) {
  const [isActive, setIsActive] = useState(false);

  console.log(subreddit);
  return (
    <ListGroupItem
      className={isActive ? "active" : ""}
      onClick={() => setIsActive(!isActive)}
      href="/"
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
};

export default Subreddit;
