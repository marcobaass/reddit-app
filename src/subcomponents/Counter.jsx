import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setScore, setVoteState } from "../features/posts/postSlice";
import CounterButton from "./CounterButton";
import styles from'./Counter.module.css'

function Counter({ postId }) {
  const dispatch = useDispatch();

  // Hole aktuellen Post aus Redux
  const post = useSelector((state) => state.posts.posts.find((p) => p.id === postId));

  // Lokale States für sofortige UI-Updates
  const [score, setLocalScore] = useState(post?.score ?? 0);
  const [voteState, setLocalVoteState] = useState(post?.voteState ?? "neutral");

  // Sync mit Redux bei Änderungen
  useEffect(() => {
    if (post) {
      setLocalScore(post.score);
      setLocalVoteState(post.voteState);
    }
  }, [post?.score, post?.voteState]); // Sync nur wenn sich der Wert in Redux ändert

  const onClickUp = () => {
    if (voteState === "neutral") {
      setLocalScore(score + 1);
      setLocalVoteState("up");
      dispatch(setScore({ postId, newScore: score + 1 }));
      dispatch(setVoteState({ postId, voteState: "up" }));
    } else if (voteState === "up") {
      setLocalScore(score - 1);
      setLocalVoteState("neutral");
      dispatch(setScore({ postId, newScore: score - 1 }));
      dispatch(setVoteState({ postId, voteState: "neutral" }));
    } else if (voteState === "down") {
      setLocalScore(score + 2);
      setLocalVoteState("up");
      dispatch(setScore({ postId, newScore: score + 2 }));
      dispatch(setVoteState({ postId, voteState: "up" }));
    }
  };

  const onClickDown = () => {
    if (voteState === "neutral") {
      setLocalScore(score - 1);
      setLocalVoteState("down");
      dispatch(setScore({ postId, newScore: score - 1 }));
      dispatch(setVoteState({ postId, voteState: "down" }));
    } else if (voteState === "down") {
      setLocalScore(score + 1);
      setLocalVoteState("neutral");
      dispatch(setScore({ postId, newScore: score + 1 }));
      dispatch(setVoteState({ postId, voteState: "neutral" }));
    } else if (voteState === "up") {
      setLocalScore(score - 2);
      setLocalVoteState("down");
      dispatch(setScore({ postId, newScore: score - 2 }));
      dispatch(setVoteState({ postId, voteState: "down" }));
    }
  };

  return (
    <div className={styles.counter}>
      <CounterButton
        direction="up"
        handleClick={onClickUp}
        color={voteState === "up" ? "green" : "black"}
      />
      <h2 style={{ color: voteState === "up" ? "green" : voteState === "down" ? "red" : "black" }}>
        {score >= 1000 ? `${Math.floor(score / 1000)}K` : score}
      </h2>
      <CounterButton
        direction="down"
        handleClick={onClickDown}
        color={voteState === "down" ? "red" : "black"}
      />
    </div>
  );
}

Counter.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default Counter;
