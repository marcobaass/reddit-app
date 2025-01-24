import PropTypes from "prop-types";

import Article from "../../components/article/Article";
import CommentList from "../comments/CommentList";
import Counter from "../../subcomponents/Counter";
import { Col, Container, Row } from "reactstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentsAsync } from "../comments/CommentSlice";

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
  const comments = useSelector((state) => state.comments.commentsByPost[post.id] || []);
  const [currentPost, setCurrentPost] = useState(post);

  useEffect(() => {
    dispatch(fetchCommentsAsync(post.id)); // Kommentare beim Laden der Komponente abrufen
  }, [dispatch, post.id]);

  return (
    <Container className="border my-2 py-4">
      <Row>
        <Col xs="auto" lg="2">
          <Counter score={currentPost.score} />
        </Col>
        <Col>
          <Article post={currentPost} />
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
