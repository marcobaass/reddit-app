import PropTypes from "prop-types";
import styles from "./SearchResults.module.css";
import Post from "../post/Post";

function SearchResults({ results }) {
  return (
    <div
      className={styles["search-results"]}
      style={results.length === 0 ? { display: "none" } : { display: "" }}
    >
      {results.map((result, index) => (
        <Post post={result} />
      ))}
    </div>
  );
}

export default SearchResults;

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};
