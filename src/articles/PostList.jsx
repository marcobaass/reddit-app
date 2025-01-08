import { useSelector } from "react-redux";
import { selectAllArticles } from "./PostSlice";
import PostCard from "./PostCard";
import { Col, Row } from "reactstrap";


const PostList = () => {
    const posts = useSelector(selectAllArticles);
    console.log('pots: ', posts);

    return (
        <Row>
            {posts.map((post) => {
                return (
                    <Col
                    key={post.id}
                    >
                        <PostCard post={post} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default PostList;