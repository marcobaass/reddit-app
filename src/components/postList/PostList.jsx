import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  fetchPopularPostsAsync,
} from "../../features/posts/PostSlice";
import PostCard from "../post/PostCard";
import { ListGroup } from "reactstrap";
import { useEffect } from "react";
/**
 * Component used to displayed the list of post
 * @returns
 */

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
    <ListGroup>
      {posts.map((post) => {
        return <PostCard key={post.url} post={post} />;
      })}
    </ListGroup>
  );
};

export default PostList;
