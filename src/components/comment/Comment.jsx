import PropTypes from "prop-types";

/**
 * Recieves a Comment and display it
 * @param {comment} param0
 * @returns
 */

const Comment = ({ comment }) => {
  const { author, score, body } = comment;
  return (
    <div className="card p-0 my-2 mx-0">
      <div className="card-body p-0 ">
        <div className="row bg-body-secondary m-0">
          <h5 className="card-title text-start col-8">{author}</h5>
          <p className=" text-end col-4">{score}</p>
        </div>
        <p className="card-text text-start">{body}</p>
      </div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    author: PropTypes.string,
    body: PropTypes.string,
    score: PropTypes.number,
  }).isRequired,
};

export default Comment;
