import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchPostById } from "../api/api";
import styles from "./FullArticlePage.module.css";
import { fetchComments } from "../api/api";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import renderCommentWithLinks from "../utils/renderCommentWithLinks";
import Counter from "../subcomponents/Counter";

const FullArticlePage = () => {
  const { postId } = useParams();
  console.log("PostId from URL:", postId);
  const dispatch = useDispatch();
  const commentsState = useSelector(
    (state) =>
      state.comments.commentsByPostId[postId] || {
        loading: false,
        error: null,
        comments: [],
      }
  );
  const navigate = useNavigate();
  const [showComments, setShowComments] = useState(false);
  const { loading = false, error = null, comments = [] } = commentsState || {};
  const allPosts = useSelector((state) => state.posts.posts);
  const showCommentsHandler = () => {
    if (!showComments && comments.length === 0) {
      dispatch(fetchComments(postId));
    }
    setShowComments((prev) => !prev);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  allPosts.forEach((p) => console.log(`Comparing: t3_${p.id} === ${postId}`));

  useEffect(() => {
    if (postId) {
      console.log("Dispatching fetchPostById for postId:", postId);
      dispatch(fetchPostById(postId)); // Dispatch the fetch action to get the post by ID
    }
  }, [dispatch, postId]);

  const post = allPosts.find(
    (p) => `t3_${p.id}` === postId || p.id === postId.replace("t3_", "")
  );

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <>
      <div className={styles.fullArticleContainer}>
        <button onClick={handleBackClick} className={styles.btnBack}>
          <FaArrowLeft /> Back
        </button>

        <h1>{post.title}</h1>

        <a
          href={`https://www.reddit.com${post.permalink}`}
          target="_blank"
          rel="noreferrer"
          className={styles.viewReddit}
        >
          View on Reddit
        </a>

        <div className={styles.imageContainer}>
          <img
            src={post.url}
            alt={post.title}
            className={styles.articleImage}
          />
        </div>

        <div className={styles.fullArticleBottomContainer}>
          <div className={styles.authorInfoContainer}>
            <a
              href={`https://www.reddit.com/${post.subreddit_name_prefixed}`}
              target="_blank"
              rel="noreferrer"
              className={styles.infoLinks}
            >
              <p>
                <strong>{post.subreddit_name_prefixed}</strong>
              </p>
            </a>
            <a
              href={`https://www.reddit.com/u/${post.author}`}
              target="_blank"
              rel="noreferrer"
              className={styles.infoLinks}
            >
              <p>By {post.author}</p>
            </a>
            <button
              onClick={showCommentsHandler}
              className={styles.btnComments}
            >
              <i className="bi bi-chat-left"></i>
            </button>
          </div>
          <div className={styles.counter}>
            <Counter postId={post.id} />
          </div>
        </div>
      </div>

      {showComments && (
        <>
          {loading && <p>Loading comments...</p>}
          {error && <p>Error fetching comments: {error.message}</p>}
          {comments.length > 0 ? (
            <ul>
              {comments.map((comment) => (
                <li key={comment.id}>
                  <div className={styles.commentsContainer}>
                    <p className={styles.author}>
                      <i class="bi bi-chat-left-text"></i> {comment.author}
                    </p>
                    <p>{renderCommentWithLinks(comment.body)}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No comments yet.</p>
          )}
        </>
      )}
    </>
  );
};

export default FullArticlePage;
