import PropTypes from "prop-types";

import Post from "./Post";
import CommentList from "../commentList/CommentList";
import { Container } from "reactstrap";

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
    <Container className="border my-2 py-4">
      <Post post={post} />
      <CommentList post={post} />
    </Container>
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostCard;
