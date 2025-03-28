import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavLink,
  NavItem,
} from "reactstrap";
import { useState } from "react";
const NavBar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar color="faded" light container="fluid lg p-0">
      <NavbarBrand href="/" className="m-auto fs-1 " tag="a">
        Reddit App
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink href="/">Posts</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/subreddits">Subreddits</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
