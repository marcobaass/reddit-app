import PropTypes from "prop-types";

import Post from "./Post";


/**
 * PostCard  includes
 * Counter Component
 * Article Component
 * Comment Component
 * @param {post} post
 * @returns
 */
const PostCard = ({ post }) => {
  return (
    <Post post={post} />
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostCard;
