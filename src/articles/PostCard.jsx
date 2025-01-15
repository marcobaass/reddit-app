import { Card, CardTitle, CardBody, CardText } from "reactstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getImageUrl, getDescription } from "../utils/helpers";

const PostCard = ({ post }) => {
  const { id, title } = post;
  const description = getDescription(post);
  const imageUrls = getImageUrl(post);

  return (
    <Link to={id} className="link-underline-light my-2">
      <Card style={{}}>
        {imageUrls ? (
          <img alt={description} src={imageUrls} className="img-thumbnail" />
        ) : (
          ""
        )}
        <CardTitle tag="h5">{title}</CardTitle>
        <CardBody>
          <CardText> {description}</CardText>
        </CardBody>
      </Card>
    </Link>
  );
};
PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    selftext: PropTypes.string,
    post_hint: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default PostCard;
