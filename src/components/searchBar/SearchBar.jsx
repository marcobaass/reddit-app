import { useDispatch, useSelector } from "react-redux";
import {
  setQuery,
  fetchSearchResults,
} from "../../features/search/searchSlice";
import { Button, Input, InputGroup } from "reactstrap";
import SearchResults from "../searchResults/SearchResults";
import styles from "../searchBar/SearchBar.module.css";
function SearchBar() {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);
  const results = useSelector((state) => state.search.results);

  const handleInputChange = (e) => {
    dispatch(setQuery(e.target.value));
  };

  const handleSearch = () => {
    dispatch(fetchSearchResults(query));
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(fetchSearchResults(query));
    }
  };

  return (
    <>
      <div className={styles.SearchBarContainer}>
        {/* <div> */}
        <InputGroup className="w-100">
          <Input
            type="text"
            value={query}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            placeholder="Search"
          />
          <Button onClick={handleSearch} className={styles.SearchBarBtn}>
            <i className="bi bi-search"></i>
          </Button>
        </InputGroup>
      </div>
      <SearchResults results={results} />
    </>
  );
}

export default SearchBar;
