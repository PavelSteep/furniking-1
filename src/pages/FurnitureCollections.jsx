import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../styles/FurnitureCollections.css';


const furnitureCollectionsData = [
  {
    id: 1,
    title1: 'Modern Furniture Collections',
    title2: 'Starting from',
    title3: 'Geometric Bookcase',
    title4: 'Up to 20% discount',
    title5: 'Minimal Sofa collections',
    title6: 'Sale upto 40% discount',
    span: '$500',
    paragraph: 'Read more',
    icon: <i className="bi bi-arrow-right-short"></i>
  }
];

function FurnitureCollections() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Обработчик изменения размера окна
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Количество изображений, которые будут отображаться на экране в зависимости от ширины окна
  const visibleImages = windowWidth >= 992 ? 2 : (windowWidth >= 768 ? 2 : (windowWidth >= 576 ? 2 : 1));

  return (
    <>
      <section className="section_furnitureCollections">
        <Container fluid>
          <Row className="d-flex justify-content-center align-items-center my-4">
            <Col lg={12} md={12}>
              {furnitureCollectionsData.slice(0, visibleImages).map((item) => (
                <div key={item.id} className="section_wrapper">
                  <div className="section_left">
                    <h4>{item.title1}</h4>
                    <h5>{item.title2}<span>{item.span}</span></h5>
                    <Link to="/"><p>{item.paragraph} {item.icon}</p></Link>
                  </div>
                  <div className="section_right">
                    <div className="section_right_top">
                      <h4>{item.title3}</h4>
                      <h5>{item.title4}</h5>
                      <Link to="/"><p>{item.paragraph} {item.icon}</p></Link>
                    </div>
                    <div className="section_right_bottom">
                      <h4>{item.title5}</h4>
                      <h5>{item.title6}</h5>
                      <Link to="/"><p>{item.paragraph} {item.icon}</p></Link>
                    </div>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}



export default FurnitureCollections;
