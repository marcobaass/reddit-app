import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "./PostSlice";
import PostCard from "./PostCard";
import { Col, Row } from "reactstrap";
import { useEffect } from "react";
import { fetchPopularPostsAsync } from "./PostSlice";

const PostList = () => {
    const dispatch = useDispatch()
    const posts = useSelector(selectAllPosts);

    useEffect(()=>{
        dispatch(fetchPopularPostsAsync())
    },[dispatch ])
    if (posts.length === 0) {
        return <p>No posts</p>
    }

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
