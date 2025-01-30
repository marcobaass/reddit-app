import { useSelector, useDispatch } from "react-redux";
import Subreddit from "../subreddit/Subreddit";

import { useEffect } from "react";
import { fetchSubreddits } from "../../api/api";
import { ListGroup } from "reactstrap";

function SubredditsList() {
  const dispatch = useDispatch();
  const { subreddits, status, error } = useSelector(
    (state) => state.subreddits
  );

  useEffect(() => {
    console.log("in use effect subreddits list");
    dispatch(fetchSubreddits());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading subreddits...</div>;
  }
  if (status === "failed") {
    return <div>{error}</div>;
  }
  return (
    <>
      <h2>Subreddits</h2>
      <ListGroup className="text-start">
        {subreddits.map((subreddit) => (
          <Subreddit key={subreddit.id} subreddit={subreddit} />
        ))}
      </ListGroup>
    </>
  );
}

export default SubredditsList;
