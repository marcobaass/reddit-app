import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "./PostSlice";
import PostCard from "./PostCard";
import { ListGroup } from "reactstrap";
import { useEffect } from "react";
import { fetchPopularPostsAsync } from "./PostSlice";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);

  useEffect(() => {
    dispatch(fetchPopularPostsAsync());
  }, [dispatch]);
  if (posts.length === 0) {
    return <p>No posts</p>;
  }

  return (
    <ListGroup className="container-fluid">
      {posts.map((post) => {
        return <PostCard key={post.url} post={post} />;
      })}
    </ListGroup>
  );
};

export default PostList;
