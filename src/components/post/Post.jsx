import { Link } from "react-router-dom";
import { Card, CardTitle, CardBody, CardText, Row, Col } from "reactstrap";
import { getImageUrl, getDescription } from "../../utils/helpers";
import Counter from "../../subcomponents/Counter";
import { useSelector, useDispatch } from "react-redux";
import { setScore, selectPostById } from "../../features/posts/postSlice";
import PropTypes from "prop-types";
import { renderMedia } from "../../utils/renderMedia";

function Post({ post }) {
  const dispatch = useDispatch();
  const postFromRedux = useSelector((state) => selectPostById(state, post.id));
  const score = postFromRedux?.score ?? post.score; // Falls Redux-Score fehlt, nutze initialen Wert

  const handleScoreChange = (newScore) => {
    dispatch(setScore({ postId: post.id, newScore }));
  };

  return (
    <Card color="light" outline className="p-0">
      <Row>
        <Col className="col-3">
          <Counter postId={post.id} />
        </Col>
        <Col className="col-9">
          {renderMedia(post)}
        </Col>
      </Row>
      <CardTitle tag="h5" className="my-2">
        {post.title}
      </CardTitle>
      <Link to={`/post/${post.id}`} className="link-underline-light my-2 text-end">
        See full article
      </Link>
      <CardBody>
        <CardText>{getDescription(post)}</CardText>
      </CardBody>
    </Card>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    selftext: PropTypes.string,
    post_hint: PropTypes.string,
    url: PropTypes.string,
    score: PropTypes.number,
  }).isRequired,
};

export default Post;
