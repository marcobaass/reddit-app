/**
 * This component will displayed the counter for each article.
 * @returns
 */
// TODO add counter logic
import { Card } from "reactstrap";
import PropTypes from "prop-types";
import { useState } from "react";
import CounterButton from "./CounterButton";

function Counter({ score }) {
  const [votes, setVotes] = useState(score);
  const [color, setColor] = useState("black");

  const resetScore = () => {
    setVotes(score);
    setColor("black");
  };
  const onClickUp = () => {
    if (votes === score) {
      setVotes(votes + 1);
      setColor("green");
      return;
    }
    if (votes === score + 1) {
      resetScore();
      return;
    }
    if (votes === score - 1 && color === "red") {
      resetScore();
      return;
    }
  };

  const onClickDown = () => {
    if (votes === score) {
      setVotes(votes - 1);
      setColor("red");
    }
    if (votes === score - 1) {
      resetScore();
      return;
    }
    if (votes === score + 1 && color === "green") {
      resetScore();
      return;
    }
  };

  return (
    <Card color="light" outline>
      <CounterButton
        direction="up"
        handleClick={onClickUp}
        color={color === "green" ? "green" : "black"}
      />
      <h2 className="my-2" style={{ color: color }}>
        {votes >= 1000 ? `${Math.floor(votes / 1000)}K` : votes}
      </h2>
      <CounterButton
        direction="down"
        handleClick={onClickDown}
        color={color === "red" ? "red" : "black"}
      />
    </Card>
  );
}

Counter.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Counter;
