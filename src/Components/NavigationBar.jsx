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
import '../index.css';
import logo from './logo.png';

const NavigationBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className='navdark' expand="md">
        <NavbarBrand href="./"><img src={logo} weight="40px" height="40px" alt="Logo" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>  
              <Input type="text" placeholder="Search" />
            </NavItem>
          </Nav>
          <Nav className='rightNav ml-auto' navbar>
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
            <UncontrolledDropdown className="launcher" nav inNavbar>
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
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              Work
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Insights
                </DropdownItem>
                <DropdownItem>
                  Post a job
                </DropdownItem>
                <DropdownItem>
                  Advertise
                </DropdownItem>
                <DropdownItem>
                  Groups
                </DropdownItem>
                <DropdownItem>
                  ProFinder
                </DropdownItem>
                <DropdownItem>
                  Salary
                </DropdownItem>
                <DropdownItem>
                  Slideshare
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="./">Learning</NavLink>
            </NavItem>
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}
export default NavigationBar;