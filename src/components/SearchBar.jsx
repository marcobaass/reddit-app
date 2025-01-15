import { Button, Input, InputGroup } from "reactstrap";
function SearchBar() {
  return (
    <div className="my-2">
      <InputGroup>
        <Input type="text" placeholder="Search" />
        <Button>
          <i className="bi bi-search"></i>
        </Button>
      </InputGroup>
    </div>
  );
}

export default SearchBar;
