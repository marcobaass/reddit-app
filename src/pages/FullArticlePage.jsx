import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchPostById } from "../api/api";
import styles from "./FullArticlePage.module.css";
import { fetchComments } from "../api/api";

const FullArticlePage = () => {
  const { postId } = useParams();
  console.log("PostId from URL:", postId);
  const dispatch = useDispatch();
  const commentsState = useSelector((state) => state.comments.commentsByPostId[postId] || {
    loading: false,
    error: null,
    comments: [],
  })

  const [showComments, setShowComments] = useState(false);

  const { loading = false, error = null, comments = [] } = commentsState || {};

  const allPosts = useSelector((state) => state.posts.posts);

  const showCommentsHandler = () => {
    if (!showComments && comments.length === 0) {
      dispatch(fetchComments(postId));
    }
    setShowComments((prev) => !prev);
  }

  console.log("All posts in Redux:", allPosts);
  console.log("PostId from URL:", postId);  // 🆕 Debug: postId aus der URL

  // 🆕 Debug: Vergleicht jede ID mit postId
  allPosts.forEach((p) => console.log(`Comparing: t3_${p.id} === ${postId}`));

  useEffect(() => {
    if (postId) {
      console.log("Dispatching fetchPostById for postId:", postId);
      dispatch(fetchPostById(postId)); // Dispatch the fetch action to get the post by ID
    }
  }, [dispatch, postId]);

  // 🆕 Fallback-Test: Vergleich ohne "t3_"
  const post = allPosts.find(
    (p) => `t3_${p.id}` === postId || p.id === postId.replace("t3_", "")
  );

  console.log("Post from Redux state:", post); // 🆕 Debug: Gefundener Post

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className={styles.fullArticleContainer}>
      <h1>{post.title}</h1>
      <a href={`https://www.reddit.com/u/${post.author}`} target="_blank" rel="noreferrer">
        <p>By {post.author}</p>
      </a>
      <a href={`https://www.reddit.com/${post.subreddit_name_prefixed}`} target="_blank" rel="noreferrer">
        <p>{post.subreddit_name_prefixed}</p>
      </a>
      <p>👍{post.ups} 👎{post.downs}</p>
      <img src={post.url} alt={post.title} className={styles.articleImage}/>
      <a href={`https://www.reddit.com${post.permalink}`} target="_blank" rel="noreferrer">
        View on Reddit
      </a>
      <button onClick={showCommentsHandler} className={styles.btnComments}>show comments</button>
      {showComments && (
        <>
          {loading && <p>Loading comments...</p>}
          {error && <p>Error fetching comments: {error.message}</p>}
          {comments.length > 0 ? (
            <ul>
              {comments.map((comment) => (
                <li key={comment.id}>
                  <strong>{comment.author}</strong>: {comment.body}
                </li>
              ))}
            </ul>
          ) : (
            <p>No comments yet.</p>
          )}
        </>
      )}

    </div>
  );
};

export default FullArticlePage;
