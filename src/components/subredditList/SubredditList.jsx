import { ListGroup, Collapse, Button } from "reactstrap";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchSubreddits, fetchPosts } from "../../api/api";
import { selectAllPosts } from "../../features/posts/postSlice";

import Subreddit from "../subreddit/Subreddit";

function SubredditsList() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSubreddit, setSelectedSubreddit] = useState("");
  const dispatch = useDispatch();
  const { subreddits, status, error } = useSelector(
    (state) => state.subreddits
  );

  const posts = useSelector(selectAllPosts);

  useEffect(() => {
    dispatch(fetchSubreddits());
  }, []);

  useEffect(() => {
    dispatch(fetchPosts(selectedSubreddit));
  }, [dispatch, selectedSubreddit]);

  if (status === "failed") {
    return <div>{error}</div>;
  }

  const handleSubreddit = (selected) => {
    setSelectedSubreddit(selected);
    toggle();
  };

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="col-2 col-lg-1 mx-0 pe-0 ps-1 ">
        <Button onClick={toggle} className="me-0 w-100">
          {/* Filter by Subreddits */}
          <i className="bi bi-filter"></i>
        </Button>
      </div>

      <Collapse isOpen={isOpen} className="text-start mt-2">
        <ListGroup id="subreddits">
          {status === "loading" ? (
            <p>Loading subreddits...</p>
          ) : (
            subreddits.map((subreddit) => (
              <Subreddit
                key={subreddit.id}
                subreddit={subreddit}
                handleSubreddit={handleSubreddit}
                selectedSubreddit={selectedSubreddit}
              />
            ))
          )}
        </ListGroup>
      </Collapse>
    </>
  );
}

export default SubredditsList;
