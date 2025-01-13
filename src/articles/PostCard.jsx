import { Card,
    // CardImg,
    CardTitle, CardBody,
    // CardText
} from "reactstrap";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const PostCard = ({ post }) => {
    console.log(post)
    const { id,
        // image,
        title,
        // description
        } = post;
    return (
    <Link to={id}>
        <Card>
        <CardTitle>{title}</CardTitle>
        <CardBody>
        {/* Checks if post has an image. */}
        {/* {image ? (
            <>
            <CardImg>{image}</CardImg>
            <CardText>{description}</CardText>
            </>
        ) : (
           <CardText>{description}</CardText>
        )}*/}
        </CardBody>
        </Card>
    </Link>
    )
};
PostCard.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.string,
        image: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
    }).isRequired,
};

export default PostCard;
