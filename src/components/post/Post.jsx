/**
 *
 *  This will displayed the article information
 */

// import Content from "../subcomponents/ImageSection";
import { Link } from "react-router-dom";
import { Card, CardTitle, CardBody, CardText } from "reactstrap";
import { getImageUrl, getDescription } from "../../utils/helpers";

import PropTypes from "prop-types";

function Post({ post }) {
  const { id, title } = post;
  const description = getDescription(post);
  const imageUrls = getImageUrl(post);

  return (
    <Link to={id} className="link-underline-light my-2">
      <Card color="light" outline>
        {imageUrls ? (
          <img alt={description} src={imageUrls} className="img-thumbnail" />
        ) : (
          ""
        )}
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
  }).isRequired,
};

export default Post;
