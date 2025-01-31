/**
 *
 *  This will displayed the article information
 */

// import Content from "../subcomponents/ImageSection";
import { Link } from "react-router-dom";
import { Card, CardTitle, CardBody, CardText, Row, Col } from "reactstrap";
import { getImageUrl, getDescription } from "../../utils/helpers";
import Counter from "../../subcomponents/Counter";

import PropTypes from "prop-types";

function Post({ post }) {
  const { id, title, score } = post;
  const description = getDescription(post);
  const imageUrls = getImageUrl(post);

  return (
    <Link to={id} className="link-underline-light my-2">
      <Card color="light" outline className="p-0">
        <Row>
          <Col className="col-3">
            <Counter score={score} />
          </Col>
          <Col className="col-9">
            {imageUrls ? (
              <img
                alt={description}
                src={imageUrls}
                className="img-thumbnail"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.className += " placeholder opacity-75";
                }}
              />
            ) : (
              <div
                className="img-thumbnail placeholder opacity-50 container-sm"
                style={{ height: "100%" }}
              ></div>
            )}
          </Col>
        </Row>
        <CardTitle tag="h5" className="my-2">
          {title}
        </CardTitle>
        <CardBody>
          <CardText>
            {description ? description : "Missing description"}
          </CardText>
        </CardBody>
      </Card>
    </Link>
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
