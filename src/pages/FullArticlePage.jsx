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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const FullArticlePage = () => {
  const { postId } = useParams();
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

  useEffect(() => {
    if (postId) {
      dispatch(fetchPostById(postId)); // Dispatch the fetch action to get the post by ID
    }
  }, [dispatch, postId]);

  const post = allPosts.find(
    (p) => `t3_${p.id}` === postId || p.id === postId.replace("t3_", "")
  );

  console.log(post)

  if (!post) {
    return <p>Post not found</p>;
  }

  console.log(post.url)

  const renderMedia = () => {
    // Case 1: Direct image
    if (post.url?.match(/\.(jpeg|jpg|png|gif)$/)) {
      return (
        <div className={styles.imageContainer}>
          <img src={post.url} alt={post.title} className={styles.articleImage} />
        </div>
      );
    }

    // Case 2: Video
    if (post.media?.reddit_video) {
      return (
        <div className={styles.imageContainer}>
          <video
            src={post.media.reddit_video.fallback_url}
            className={styles.articleImage}
            autoPlay
            controls
          />
        </div>
      );
    }

    // Case 3: HTML Embed (Tweets, YouTube, etc.)
    if (post.secure_media_embed?.content || post.media?.oembed?.html) {
      return (
        <div
          className={styles.embedContainer}
          dangerouslySetInnerHTML={{ __html: post.secure_media_embed?.content || post.media.oembed.html }}
        />
      );
    }

    // Case 4: Gallery
    const imageUrls = post.media_metadata
      ? Object.values(post.media_metadata).map((media) => media.s.u.replace(/&amp;/g, "&"))
      : [];

    if (imageUrls.length > 0) {
      return (
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className={styles.imageContainer}
        >
          {imageUrls.map((imgUrl, index) => (
            <SwiperSlide key={index}>
              <img src={imgUrl} alt={`Gallery image ${index + 1}`} className={styles.articleImage} />
            </SwiperSlide>
          ))}
        </Swiper>
      );
    }

    // Case 5: External link preview
    if (post.post_hint === "link" && post.url) {
      const isValidThumbnail =
        post.thumbnail &&
        !["self", "default", "nsfw", "spoiler"].includes(post.thumbnail);

      return (
        <div className={styles.linkContainer}>
          {isValidThumbnail && (
            <img src={post.thumbnail} alt="Link preview" className={styles.linkThumbnail} />
          )}
          <a href={post.url} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
            <p>go to source</p>
          </a>
        </div>
      );
    }

    return null;
  };



  return (
    <>
      <div className={styles.fullArticleContainer}>
        <button onClick={handleBackClick} className={styles.btnBack}>
          <i className="bi bi-backspace-fill"></i>
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

        {renderMedia()}

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
