import React from 'react';
import { Dropdown } from 'react-bootstrap';
import PersonIcon from '@material-ui/icons/Person';

const Navbar = (handleLogout) => {


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark  navbarcolor">
        <a className="navbar-brand  font-weight-bolder" href="/">
          <span className="">InternsHub</span>
        </a>
        <div className="ml-auto">
          <Dropdown>
            <Dropdown.Toggle className="navbar-links mr-4" id="dropdown-basic">
              <PersonIcon />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Home</Dropdown.Item>
              <Dropdown.Item href="/Profile">Profile</Dropdown.Item>
              <Dropdown.Item href="handleLogout">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
    </>
  );
}

export default Navbar;


