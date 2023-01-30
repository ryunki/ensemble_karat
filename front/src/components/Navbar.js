import { Navbar as NavbarBs, Nav, Container, Row, Col } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

import 'bootstrap-icons/font/bootstrap-icons.css';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate('/');
  };
  return (
     <>
    <NavbarBs className="navbar-bs shadow-sm">
      <Row className="w-100 logo-row">
        <Col sm={12} md={12} className="col-logo px-0" onClick={clickHandler}>
          <img className="nav-logo" src="/logo_2.png" />
        <p className="logo-under-text">
          MUSIK FÜR DEN BESONDEREN ANLASS
        </p>
        </Col>
      {/* </Row> */}

      {/* <Row className="navbar-text"> */}
      {/* <Col sm={8} className="px-0" style={{alignSelf: "center"}}>
          <Nav className="navbar-wrapper navbar-text">
              <Nav.Link to="/" as={NavLink} className="nav-hover">Home <div className="nav-line"/></Nav.Link>
              <Nav.Link to="/menu" as={NavLink} className="nav-hover"> Menu <div className="nav-line"/></Nav.Link>
              <Nav.Link to="/about" as={NavLink} className="nav-hover"> About <div className="nav-line"/></Nav.Link>
              <Nav.Link to="/contact" as={NavLink} className="nav-hover">Contact <div className="nav-line"/></Nav.Link>
          </Nav>
      </Col> */}
      {/* </Row>
      <Row> */}
      <Col style={{padding:0}}>
        <Nav className="navbar-wrapper navbar-text">
          <Nav.Link to="/" as={NavLink} className="nav-hover"> Home <div className="nav-line"/></Nav.Link>
          <Nav.Link to="/menu" as={NavLink} className="nav-hover">Video <div className="nav-line"/></Nav.Link>
          <Nav.Link to="/about" as={NavLink} className="nav-hover"> Sample <div className="nav-line"/></Nav.Link>
          <Nav.Link to="/contact" as={NavLink} className="nav-hover">Contact <div className="nav-line"/></Nav.Link>
        </Nav>
      </Col>
      </Row>
      {/* </Container> */}
    </NavbarBs>
    </>
  )
};

export default Navbar;
