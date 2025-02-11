const renderCommentWithLinks = (text) => {
  if (!text) return null;

  const parts = text.split(/(https?:\/\/\S+)/g); // Trennen von normalen Textteilen und Links

  return parts.map((part, index) =>
    part.match(/^https?:\/\/\S+$/) ? (
      <a key={index} href={part} target="_blank" rel="noopener noreferrer">
        {part.length > 40 ? part.substring(0, 37) + "..." : part}
      </a>
    ) : (
      <span key={index}>{part}</span>
    )
  );
};

export default renderCommentWithLinks;
