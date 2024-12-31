import { Card, CardImgOverlay, CardImg, CardTitle, CardBody, CardText, CardSubtitle } from "reactstrap";

const ArticleCard = ({ article }) => {
    const { image, title, description } = article;
    return (
    <Link to={id}>
        <Card>
        <CardTitle>{title}</CardTitle>
        <CardBody>
        {/* Checks if an article has an image. */}
        {image ? (
            <>
            <CardImg>{image}</CardImg>
            <CardSubtitle>{description}</CardSubtitle>
            </>
        ) : (
           <CardText>{description}</CardText> 
        )}
        </CardBody>
        </Card>
    </Link>
    )
};

export default ArticleCard;