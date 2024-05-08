import React, { useState } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import '../styles/OurCustomer.css';
import FemaleDoctor from '../assets/ourCustomer/FemaleDoctor.jpg';


function OurCustomer() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


  return (
    <>
      <section className="section_our_customer">
        <Container fluid>
          <Row>
            <Col md={12} className="text-center">
              <h2>What Our Customer Says</h2>
            </Col>
          </Row>
        </Container>
        <div className="our_customer_wrapper">
          <Container fluid>
            <Row>
              <Col lg={12} md={12} className="my-auto">
                <Carousel data-bs-theme="dark" activeIndex={index} onSelect={handleSelect}>
                  <Carousel.Item>
                    <Carousel.Caption>
                      <div className="our_customer_img">
                        <img src={FemaleDoctor} alt="Female Doctor" className="img-fluid" />
                      </div>
                      <div className="our_customer_text">
                        <p>
                          I like Furniking.com and as compared to other company it's polices and customers support is very good easy to reach., also many time they unable to delivered. The ultricies are pregnant while the quis is suspended. Risus commodo viverra maecenas accumsan lacus vel facilisist amet.
                        </p>
                        <h5>Angelina Joly</h5>
                        <span>Co-founder</span>
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Carousel.Caption>
                      <div className="our_customer_img">
                        <img src={FemaleDoctor} alt="Female Doctor" className="img-fluid" />
                      </div>
                      <div className="our_customer_text">
                        <p>
                          I like Furniking.com and as compared to other company it's polices and customers support is very good easy to reach., also many time they unable to delivered. The ultricies are pregnant while the quis is suspended. Risus commodo viverra maecenas accumsan lacus vel facilisist amet.
                        </p>
                        <h5>Angelina Joly</h5>
                        <span>Co-founder</span>
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Carousel.Caption>
                      <div className="our_customer_img">
                        <img src={FemaleDoctor} alt="Female Doctor" className="img-fluid" />
                      </div>                    
                      <div className="our_customer_text">
                        <p>
                          I like Furniking.com and as compared to other company it's polices and customers support is very good easy to reach., also many time they unable to delivered. The ultricies are pregnant while the quis is suspended. Risus commodo viverra maecenas accumsan lacus vel facilisist amet.
                        </p>
                        <h5>Angelina Joly</h5>
                        <span>Co-founder</span>
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
}

export default OurCustomer;
