import React from 'react'
import './app-navbar.scss'
import Container from 'react-bootstrap/Container';
import {Navbar, Nav} from 'react-bootstrap/';
import { Link } from 'react-router-dom';
import ChangeLanguageComponent from './change-language/ChangeLanguage';
import { LanguageCtst } from '../../../services/context/LanguageService';


const AppNavbar = () => {
  const {language } = React.useContext(LanguageCtst);


  return (
    <Navbar 
    className={`app-navbar`}
      sticky="top" 
      bg="dark" 
      variant="dark"  
      expand="md">
      <Container>
        <Navbar.Brand className=''>
          <Link className='link me-3 mt-1' to="/">
            <img 
              alt='web-logo' 
              src='/web-logo.png'
              width="170"
              height="70"
              className="d-inline-block align-top"/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto my-2">
            <Link className='link me-3 mt-1' to="/get-started">{language.navbar.get_started}</Link>
            <ChangeLanguageComponent />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNavbar