/**
 * This component will displayed the counter for each article.
 * @returns
 */
// TODO add counter logic
import { Card } from "reactstrap";
function Counter() {
  return (
    <Card color="light" outline>
      <i className="bi bi-caret-up-fill fs-4"></i>
      <h2 className="my-2">2K</h2>
      <i className="bi bi-caret-down-fill fs-4"></i>
    </Card>
  );
}

export default Counter;
