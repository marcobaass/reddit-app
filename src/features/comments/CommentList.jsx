import PropTypes from "prop-types";

const CommentList = ({ comments }) => {
  console.log("CommentList: " + comments);

  const sortedComments = [...comments].sort((a, b) => (b.ups - b.downs) - (a.ups - a.downs));

  const topComments = sortedComments.slice(0, 5);

  if (topComments.length === 0) {
    return <p>No comments available</p>;
  }

  return (
    <div className="mt-3">
      <h5>Comments</h5>
      <ul>
        {topComments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.author}</strong>: {comment.body} ({comment.score} Score)
          </li>
        ))}
      </ul>
    </div>
  );
};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentList;
