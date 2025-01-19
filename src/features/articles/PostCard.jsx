import PropTypes from "prop-types";

import Article from "../../components/article/Article";
import CommentList from "../comments/CommentList";
import Counter from "../../subcomponents/Counter";
import { Col, Container, Row } from "reactstrap";

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
  return (
    <Container className="border my-2 py-4">
      <Row>
        <Col xs="auto" lg="2">
          <Counter score={post.score} />
        </Col>
        <Col>
          <Article post={post} />
        </Col>
      </Row>
      <CommentList />
    </Container>
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostCard;
