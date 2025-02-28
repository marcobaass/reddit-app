import { useSelector } from "react-redux";
import PostList from "../postList/PostList";
import SearchResults from "../searchResults/SearchResults";

const MainContent = () => {
  const query = useSelector((state) => state.search.query);
  const results = useSelector((state) => state.search.results);

  // If there is a non-empty query and some results, render SearchResults
  if (query.trim() && results.length > 0) {
    return <SearchResults results={results} />;
  }
  // Otherwise, render the regular post list
  return <PostList />;
};

export default MainContent;
