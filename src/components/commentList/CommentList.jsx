import PropTypes from "prop-types";
import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../api/api";

import { Collapse, ListGroup } from "reactstrap";

const CommentList = ({ post }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const commentsByPostId = useSelector(
    (state) => state.comments.commentsByPostId
  );

  const {
    comments: postComments,
    loading,
    error,
  } = useMemo(() => {
    return (
      commentsByPostId[post.id] || {
        loading: false,
        error: null,
        comments: [],
      }
    );
  }, [commentsByPostId, post.id]);

  useEffect(() => {
    if (isOpen) {
      dispatch(fetchComments(post.id));
    }
  }, [dispatch, post.id, isOpen]);

  if (error) {
    return <div>Error loading comments: {error}</div>;
  }

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" border-top pt-2">
      <div className="row" onClick={toggle}>
        <div className="col text-truncate align-button py-2 text-start ">
          By
          <span className="text-primary fw-bold"> {post.author}</span>
        </div>
        <div className="col-4 btn text-end">
          <i className="bi bi-chat-left"></i>{" "}
          <span className="fw-light">{post.num_comments}</span>
        </div>
      </div>
      <Collapse isOpen={isOpen}>
        <ListGroup id="comments">
          <p>is open</p>
          {loading ? (
            <p>Loading...</p>
          ) : (
            postComments.map((comment) => (
              <li key={comment.id}>
                <strong>{comment.author}</strong>: {comment.body} (
                {comment.score} Score)
              </li>
            ))
          )}
        </ListGroup>
      </Collapse>
    </div>
  );
};

CommentList.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentList;
