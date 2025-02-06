import PropTypes from "prop-types";
import styles from "./SearchResults.module.css";

function SearchResults({ results }) {
  return (
    <div
      className={styles["search-results"]}
      style={results.length === 0 ? { display: "none" } : { display: "" }}
    >
      {results.map((result, index) => (
        <div key={index} className={styles["result-item"]}>
          <h3>{result.title}</h3>
          <p>{result.selftext}</p>
          <a
            href={`https://www.reddit.com${result.permalink}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Post
          </a>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};
