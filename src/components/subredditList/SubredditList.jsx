import { ListGroup } from "reactstrap";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchSubreddits, fetchPosts } from "../../api/api";
import { selectAllPosts } from "../../features/posts/postSlice";

import Subreddit from "../subreddit/Subreddit";
import { useNavigate } from "react-router-dom";

function SubredditsList() {
  const navigate = useNavigate();
  const [selectedSubreddit, setSelectedSubreddit] = useState("all");
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
    return navigate("/");
  };

  return (
    <>
      <div className="col-2 col-lg-1 ms-1 pe-0 position-absolute end-0">
        <button
          className="btn btn-secondary w-100 me-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasSubreddits"
          aria-controls="offcanvasSubreddits"
        >
          {/* Select Subreddits  */}
          <i className="bi bi-filter"></i>
        </button>
      </div>
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasSubreddits"
        aria-labelledby="subredditTitle"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="subredditTitle">
            Subreddits
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body text-start">
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
        </div>
      </div>
    </>
  );
}

export default SubredditsList;
