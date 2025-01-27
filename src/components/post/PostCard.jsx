import PropTypes from "prop-types";

import Post from "./Post";
import CommentList from "../../features/comments/CommentList";
import Counter from "../../subcomponents/Counter";
import { Col, Container, Row } from "reactstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentsAsync } from "../../features/comments/CommentSlice";

/**
 * PostCard  includes
 * Counter Component
 * Article Component
 * Comment Component
 * @param {post} post
 * @returns
 */
const PostCard = ({ post }) => {
  // TODO Generate the comment list and pass it to CommentList component
  const dispatch = useDispatch();
  const comments = useSelector(
    (state) => state.comments.commentsByPost[post.id] || []
  );

  useEffect(() => {
    dispatch(fetchCommentsAsync(post.id)); // Kommentare beim Laden der Komponente abrufen
  }, [dispatch, post.id]);

  return (
    <Container className="border my-2 py-4">
      <Row>
        <Col xs="auto" lg="2">
          <Counter score={post.score} />
        </Col>
        <Col>
          <Post post={post} />
        </Col>
      </Row>
      <CommentList comments={comments} />
    </Container>
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostCard;
