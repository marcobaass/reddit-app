import { Button } from "reactstrap";
import PropTypes from "prop-types";
const CounterButton = ({ handleClick, color, direction }) => {
  const caretClass = `bi bi-caret-${direction}-fill fs-4 up`;
  return (
    <Button outline color="light">
      <i
        className={caretClass}
        onClick={handleClick}
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
