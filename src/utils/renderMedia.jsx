import styles from './renderMedia.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export const renderMedia = (post) => {
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
