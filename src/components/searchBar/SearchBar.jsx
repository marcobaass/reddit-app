import { useDispatch, useSelector } from 'react-redux';
import { setQuery, fetchSearchResults } from '../../redux/slices/searchSlice';
import { Button, Input, InputGroup } from "reactstrap";
import SearchResults from '../searchResults/SearchResults';
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
    if (e.key === 'Enter') {
      dispatch(fetchSearchResults(query));
    }
  };

  return (
    <div className="my-2">
      <InputGroup>
        <Input
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          placeholder="Search" />
        <Button
          onClick={handleSearch}>
          <i className="bi bi-search"></i>
        </Button>
      </InputGroup>
      <SearchResults results={results} />
    </div>
  );
}

export default SearchBar;
