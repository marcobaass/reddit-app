import { Card, CardImg, CardTitle, CardBody, CardText, CardSubtitle } from "reactstrap";

const PostCard = ({ post }) => {
    const { image, title, description } = post;
    return (
    <Link to={id}>
        <Card>
        <CardTitle>{title}</CardTitle>
        <CardBody>
        {/* Checks if post has an image. */}
        {image ? (
            <>
            <CardImg>{image}</CardImg>
            <CardText>{description}</CardText>
            </>
        ) : (
           <CardText>{description}</CardText> 
        )}
        </CardBody>
        </Card>
    </Link>
    )
};

export default PostCard;