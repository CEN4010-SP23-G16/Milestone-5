import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { RiUserSettingsLine } from 'react-icons/ri';
import { BsCloudSunFill } from 'react-icons/bs';

export default function Header() {

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to='/' as={NavLink} className='d-flex align-items-center'>
            <BsCloudSunFill className='cloudicon' />
            <span>Climate Smart</span>

          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="mx-auto">

              <Nav.Link to="/" as={NavLink} className="mx-3 px-3">Home</Nav.Link>

              <Nav.Link to="/weather" as={NavLink} className="mx-3 px-3">Weather</Nav.Link>

              <Nav.Link to="/maps-radar" as={NavLink} className="mx-3 px-3">Maps & Radar</Nav.Link>

              <Nav.Link to="/alerts" as={NavLink} className="mx-3 px-3">Alerts</Nav.Link>

              <Nav.Link to="/settings" as={NavLink} className="mx-3 px-3">Settings</Nav.Link>
            </Nav>

            {/*This would be more for the settings button */}
            <Nav className='ms-auto'>
              <Nav.Link to='/signUpUser' as={NavLink}><RiUserSettingsLine className='settingicon' /></Nav.Link>
            </Nav>

          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  )
}
