import { useSelector } from "react-redux";
import { selectAllPosts } from "./PostSlice";
import PostCard from "./PostCard";
import { Col, Row } from "reactstrap";


const PostList = () => {
    const posts = useSelector(selectAllPosts);
    console.log('posts: ', posts);

    return (
        <Row>
            {posts.map((post) => {
                return (
                    <Col
                    key={post.url}
                    >
                        <PostCard post={post} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default PostList;