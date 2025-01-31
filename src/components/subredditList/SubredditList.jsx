import { ListGroup, Collapse, Button } from "reactstrap";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchSubreddits, fetchPosts } from "../../api/api";
import { selectAllPosts } from "../../features/posts/postSlice";

import Subreddit from "../subreddit/Subreddit";
import PostCard from "../post/PostCard";

function SubredditsList() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSubreddit, setSelectedSubreddit] = useState("Home");
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

  if (status === "loading") {
    return <div>Loading subreddits...</div>;
  }

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
      <Button onClick={toggle} className="my-2 w-100">
        Filter by Subreddits
        <i className="bi bi-filter"></i>
      </Button>
      <ListGroup className="text-start">
        <Collapse isOpen={isOpen}>
          {subreddits.map((subreddit) => (
            <Subreddit
              key={subreddit.id}
              subreddit={subreddit}
              handleSubreddit={handleSubreddit}
              selectedSubreddit={selectedSubreddit}
            />
          ))}
        </Collapse>
      </ListGroup>
      <ListGroup>
        {posts.map((post) => (
          <PostCard key={post.url} post={post} />
        ))}
      </ListGroup>
    </>
  );
}

export default SubredditsList;
