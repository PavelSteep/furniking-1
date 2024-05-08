import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../../styles/FooterStyle.css';
import Logo from '../../assets/header/furniking.png';


function Footer() {
  return (
    <>
       <>
      <footer>
        <Container fluid>
          <Row className="justify-content-center mb-4">
            <Col md={3} lg={3} className="d-flex">
              <div style={{margin:'0 auto'}}>
                <div className="first_left_wrapper text-left">
                  <div className="footer_logo">
                    <Link to="/">
                      <img src={Logo} alt="logo" />
                    </Link>
                    <h2>Furniking</h2>
                  </div>
                  <p className="mb-3">
                    Funking is the a popular Ecommerce site. <br />
                    Lorem ipsum dolor sit amet, consectetur  <br />
                    adipiscing elit, sed do eiusmod tempor
                  </p>
                  <div className="icons_socials_wrapper"> 
                    <ul className="socials">
                      <li>
                        <Link to="/">
                          <i class="bi bi-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i class="bi bi-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i class="bi bi-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i class="bi bi-youtube"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={3} lg={3} className="d-flex">
              <div style={{margin:'0 auto'}}>
                <div className="second_left_wrapper">
                  <h5>Help</h5>
                  <p>Privacy Policy</p>
                  <p>Shipping & Delivery</p>
                  <p>Refund Policy</p>
                  <p>Track Your Order</p>
                  <p>Article</p>
                </div>
              </div>
            </Col>
            <Col md={3} lg={3} className="d-flex">
              <div style={{margin:'0 auto'}}>
                <div className="third_left_wrapper text-left">
                  <h5>Store</h5>
                  <p>Furniture</p>
                  <p>Tabble</p>
                  <p>Sofa</p>
                  <p>Other</p>
                </div>
              </div>            
            </Col>
            <Col md={3} lg={3} className="d-flex">
              <div style={{margin:'0 auto'}}>
                <div className="fourth_left_wrapper text-left">
                  <h5>Supports</h5>
                  <p>Feedbcak</p>
                  <p>Contact us</p>
                  <p>Download app</p>
                  <p>Terms conditins</p>
                </div>            
              </div>
            </Col>
          </Row>
          <Row className="footer_down">
            <Col md={6} lg={9}>
              <div className="footer_left">
                <span>
                  © 2023 Funking - All rights reserved.
                </span>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="footer_right">
                <ul className="d-flex">
                  <li>
                    <Link to="/">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      Security
                    </Link>                  
                  </li>
                  <li>
                    <Link to="/">
                      Terms
                    </Link>                  
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>   
    </>
    </>
  );
}

export default Footer;
