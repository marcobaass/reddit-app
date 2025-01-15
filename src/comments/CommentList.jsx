// import { useSelector } from "react-redux";
// import { Dropdown, Col } from "reactstrap";
import Comment from "./Comment";

/**
 * This component recieves a list of commnet for an article
 * Needs to display a comment component for each comment
 * @param CommentList
 * @returns
 *
 */

const CommentList = () =>
  // {CommentList}
  {
    return (
      <>
        <p>Comment List</p>
        <Comment />
        {/* {CommentList.map((comment) => {
        return <Comment key={comment} comment={comment} />;
      })} */}
      </>
    );
  };

export default CommentList;
