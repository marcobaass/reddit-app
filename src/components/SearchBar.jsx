import { Button, Input, InputGroup } from "reactstrap";
function SearchBar() {
  return (
    <div>
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
