import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  fetchPostsAsync,
} from "../../features/posts/postSlice";
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
    dispatch(fetchPostsAsync());
  }, []);

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
