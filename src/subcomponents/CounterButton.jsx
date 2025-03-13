import { Button } from "reactstrap";
import PropTypes from "prop-types";
import styles from './CounterButton.module.css'
const CounterButton = ({ handleClick, color, direction }) => {
  const caretClass = `bi bi-caret-${direction}-fill fs-4 up`;
  return (
    <Button
      onClick={handleClick}
      className={styles.counterButton}
    >
      <i
        className={caretClass}
        style={{ color: color }}
      ></i>
    </Button>
  );
};

CounterButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
};

export default CounterButton;
