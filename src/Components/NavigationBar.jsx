import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  FormText,
  InputGroup, 
  InputGroupAddon, 
  InputGroupText,
  NavText,
  NavbarText
} from 'reactstrap';

const NavigationBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Logo</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>  
              <Input type="text" placeholder="Search" />
            </NavItem>
            <NavItem>
              <NavLink href="./">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="./">My Network</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="./">Jobs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="./">Messaging</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              Profile
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Settings
                </DropdownItem>
                <DropdownItem>
                  Premium
                </DropdownItem>
                <DropdownItem>
                  Language
                </DropdownItem>
                <DropdownItem>
                  Help
                </DropdownItem>
                <DropdownItem>
                  Activity
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Sign out
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default NavigationBar;