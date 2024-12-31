import { useSelector } from "react-redux";
import { selectAllArticles } from "./ArticleSlice";
import ArticleCard from "./ArticleCard";
import { Col, Row } from "reactstrap";


const ArticleList = () => {
    const articles = useSelector(selectAllArticles);
    console.log('articles: ', articles);

    return (
        <Row>
            {articles.map((article) => {
                return (
                    <Col
                    key={article.id}
                    >
                        <ArticleCard article={article} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default ArticleList;