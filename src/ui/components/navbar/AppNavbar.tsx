import React from 'react'
import './app-navbar.scss'
import Container from 'react-bootstrap/Container';
import {Navbar, Nav} from 'react-bootstrap/';
import { Link } from 'react-router-dom';
import ChangeLanguageComponent from '../change-language/ChangeLanguage';
import { LanguageCtst } from '../../../services/context/LanguageService';


const AppNavbar = () => {
  const {language } = React.useContext(LanguageCtst);


  return (
    <Navbar sticky="top" bg="dark" variant="dark" className='app-navbar' expand="lg">
      <Container>
        <Navbar.Brand className='me-5'>CALI-APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto my-2">
            <Link className='link me-3 mt-1' to="/">{language.navbar.home}</Link>
            <Link className='link me-3 mt-1' to="/get-started">{language.navbar.get_started}</Link>
          </Nav>
          <ChangeLanguageComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNavbar