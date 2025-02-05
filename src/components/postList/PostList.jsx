import { useSelector, useDispatch } from "react-redux";
import { fetchPostsAsync } from "../../features/posts/postSlice";
import PostCard from "../post/PostCard";
import { ListGroup } from "reactstrap";
import { useEffect } from "react";
/**
 * Component used to displayed the list of post
 * @returns
 */

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, []);

  if (loading) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ListGroup className="mx-0 px-0 ">
      {posts.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </ListGroup>
  );
};

export default PostList;
