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
    // <NavbarBs className="bg-white shadow-sm mb-3">
    <NavbarBs className="navbar-bs shadow-sm">
      <Row className="w-100">
        <Col sm={3} md={2} className="col-logo px-0" onClick={clickHandler}>
          <img className="nav-logo" src="/tokyoya_logo_black.png" />
          <p className="logo-title">TOKYOYA</p>
        </Col>
      {/* </Row> */}

      {/* <Row className="navbar-text"> */}
      <Col sm={8} className="px-0" style={{alignSelf: "center"}}>
          <Nav className="navbar-wrapper navbar-text">
              <Nav.Link to="/" as={NavLink} className="nav-hover">Home <div className="nav-line"/></Nav.Link>
              <Nav.Link to="/menu" as={NavLink} className="nav-hover"> Menu <div className="nav-line"/></Nav.Link>
              <Nav.Link to="/about" as={NavLink} className="nav-hover"> About <div className="nav-line"/></Nav.Link>
              <Nav.Link to="/contact" as={NavLink} className="nav-hover">Contact <div className="nav-line"/></Nav.Link>
          </Nav>
      </Col>
      </Row>

      {/* </Container> */}
    </NavbarBs>
  );
};

export default Navbar;
