import React, { useState } from "react";
import { Container, Form, Nav, Navbar, Dropdown, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../styles/HeaderStyle.css';
import Logo from '../../assets/header/furniking.png';




function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleIconClick = () => {
    toggleMenu();
  };

  return (
    <>
         {/* First navigation */}
      <Navbar expand="lg" className="first-navigation bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/">
              <h5>Welcome to our online shop</h5>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          <NavDropdown title={<span className="span-english">English (USD) <i className="bi bi-chevron-down" style={{ fontSize: '0.75rem' }}></i></span>} id="navbarScrollingDropdown">
            <NavDropdown.Item className="drop" href="#action3">German (EUR)</NavDropdown.Item>
            <NavDropdown.Item className="drop" href="#action4">Polish (PLN)</NavDropdown.Item>
            <NavDropdown.Item className="drop" href="#action5">Ukrainian (UAH)</NavDropdown.Item>
          </NavDropdown>
          <Navbar.Text className="custom-navbar-text">
            <Link to="#login" className="nav-link">Login or Sign up</Link>
          </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
          {/* Second navigation */}
          {/* left */}
      <Container fluid>
        <Navbar className="second-navigation bg-body-tertiary navbar-light">
          <Container fluid className="second-container">
            <Navbar.Brand href="#home">
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Brand href="#"><h4 className="mb-0 ms-0">Furniking</h4></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
              {/* center */}
            <Navbar.Collapse id="navbarScroll" className="d-lg-flex flex-grow-1 justify-content-end second-nav-center">

              <Form className="d-flex">
                <Form.Control
                  type="search"
                  className="me-0 second-center-form-control"
                  placeholder="Search here"
                  aria-label="Search"
                  style={{ width: '100%', maxWidth: '500px' }} // Адаптивная ширина поля ввода
                />
                <Nav className="my-2 my-lg-0 nav-categories" style={{ maxHeight: '100px' }} navbarScroll>
                  <NavDropdown 
                    title={
                      <div className="d-flex categories">
                        Categories
                        <i class="bi bi-chevron-down ms-1 categories-i"></i>
                      </div>
                    } 
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item href="#action3">Furniture</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">TRENDING</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">SPECIAL OFFER</NavDropdown.Item>
                    <NavDropdown.Item href="#action6">OUR PRODUCTS</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action7">Everything else</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Button variant="outline-success"><i class="bi bi-search"></i></Button>
              </Form>
            </Navbar.Collapse>
              {/* right */}
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/">
                  <div className="icon">
                    <i class="bi bi-bag"></i>
                    <span className="goods">4</span>
                  </div>
                </Nav.Link>
                <Nav.Link as={Link} to="/">
                  <div className="icon">
                    <i class="bi bi-bell"></i>
                  </div>
                </Nav.Link>
                <Nav.Link as={Link} to="/">
                  <div className="icon">
                    <i class="bi bi-person"></i>
                  </div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
       {/* Third navigation */}
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary third-navigation">
        <Container className="third-container">
          <Navbar.Brand href="#home">
            <Dropdown className="third-navigation-button">
              <Dropdown.Toggle id="dropdown-basic" className="no-arrow" onClick={handleIconClick}>
                <i className="bi bi-filter-left"></i>
                <span className="text">ALL COLLECTIONS</span>
              </Dropdown.Toggle>
              <Dropdown.Menu align="start" show={showMenu}>
                <Dropdown.Item href="#action3">All</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#action4">New Arrivals</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#action5">Hot Sale</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#action6">Furniture</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#action7">Amrature</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#action8">Tabble</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#action9">Chair</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#action10">Sofa</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#action11">Mirrors</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#action11">Stools</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#action11">Benches</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto nav-link-custom nav-link-third">
              <Nav.Link as={Link} to="/">HOME</Nav.Link>
              <Nav.Link as={Link} to="/shop">SHOP</Nav.Link>
              <Nav.Link as={Link} to="/blog">BLOG</Nav.Link>
              <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
              <Nav.Link as={Link} to="/blog">BLOG</Nav.Link>
              <Nav.Link as={Link} to="/contact">CONTACT US</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
