import React, { useState } from 'react';
import { Container, Row, Col, Carousel, Pagination } from 'react-bootstrap';
import { FaCircle } from 'react-icons/fa';
import '../styles/Trending.css'
import Cards from '../components/Layouts/Cards';

import Image1 from '../assets/trending/armchair-1.jpg';
import Image2 from '../assets/trending/armchair-2.jpg';
import Image3 from '../assets/trending/armchair-3.jpg';
import Image4 from '../assets/trending/armchair-4.jpg';
import Image5 from '../assets/trending/armchair-5.jpg';
import Image6 from '../assets/trending/armchair-6.jpg';
import Image7 from '../assets/trending/armchair-7.jpg';
import Image8 from '../assets/trending/armchair-8.jpg';


const armchairData = [
  {
    id:'0001',
    backgroundNewLabel:'var(--sky-blue)',
    nameNewLabel:'New',
    image:Image1,
    brand:'CHAIR',
    title:'Minimal LCD chair',
    priceNew:'$180',
    priceOld:'$250',
    rating:5,
  },
  {
    id:'0002',
    backgroundNewLabel:'var(--sky-blue)',
    nameNewLabel:'New',
    image:Image2,
    brand:'CHAIR',
    title:'Minimal iconic chair',
    priceNew:'$120',
    priceOld:'$150',
    rating:4,
  },
  {
    id:'0003',
    backgroundNewLabel:'var(--limerick)',
    nameNewLabel:'Sale',
    image:Image3,
    brand:'CHAIR',
    title:'Dining chairs',
    priceNew:'$100',
    priceOld:'$120',
    rating:5,
  },
  {
    id:'0004',
    backgroundNewLabel:'var(--limerick)',
    nameNewLabel:'Sale',
    image:Image4,
    brand:'CHAIR',
    title:'Buskbo armchair',
    priceNew:'$130',
    priceOld:'$150',
    rating:4,
  },
  {
    id:'0005',
    backgroundNewLabel:'var(--limerick)',
    nameNewLabel:'Sale',
    image:Image5,
    brand:'CHAIR',
    title:'Modern chairs',
    priceNew:'$100',
    priceOld:'$120',
  },
  {
    id:'0006',
    backgroundNewLabel:'var(--limerick)',
    nameNewLabel:'Sale',
    image:Image6,
    brand:'CHAIR',
    title:'Plastic dining chair',
    priceNew:'$130',
    priceOld:'$150',
    rating:4,
  },
  {
    id:'0007',
    backgroundNewLabel:'var(--sky-blue)',
    nameNewLabel:'New',
    image:Image7,
    brand:'CHAIR',
    title:'Minimal Wood chair',
    priceNew:'$180',
    priceOld:'$250',
    rating:5,
  },
  {
    id:'0008',
    backgroundNewLabel:'var(--sky-blue)',
    nameNewLabel:'New',
    image:Image8,
    brand:'CHAIR',
    title:'Elegent wood chair',
    priceNew:'$120',
    priceOld:'$150',
    rating:4,
  },
];



const renderRatingIcons = (rating) => {
  const stars = [];
  for (let a = 0; a < 5; a++) {
    if (a === 4) {
      // Если это последняя звезда
      stars.push(
        <i key={a} className="bi bi-star" style={{ color: '#cccccc', textShadow: '0 0 0.1em green', borderColor: 'green' }}></i>
      );
    } else if (rating >= 1) {
      stars.push(
        <i key={a} className="bi bi-star" style={{ color: 'transparent', textShadow: '0 0 0.1em green', borderColor: 'green' }}></i>
      );
      rating--;
    } else if (rating > 0 && rating < 1) {
      stars.push(
        <span key={a} className="d-inline-block position-relative">
          <i className="bi bi-star-half" style={{ color: 'transparent', textShadow: '0 0 0.1em green', borderColor: 'green' }}></i>
          <i className="bi bi-star" style={{ color: 'transparent', position: 'absolute', top: 0, left: 0, textShadow: '0 0 0.1em green', borderColor: 'green' }}></i>
        </span>
      );
      rating = 0;
    } else {
      stars.push(
        <i key={a} className="bi bi-star" style={{ color: 'transparent', textShadow: '0 0 0.1em green', borderColor: 'green' }}></i>
      );
    }
  }
  return stars;
}


function Trending() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handlePageClick = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  
  return(
    <>
      <section className="section_trending">
        <Container fluid>
          <Row>
            <Col lg={{span:8, offset:2}}>
              <h2 className="text-center">TRENDING</h2>
              <ul className="list-inline text-center">
                <li className="list-inline-item"><p>Top Products</p></li>
                <li className="list-inline-item"><p>New Arrivals</p></li>
                <li className="list-inline-item"><p>Best Sellers</p></li>
              </ul>
            </Col>
          </Row>
          <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
            <Carousel.Item>
              <Row>
                {
                  armchairData.map((card, index) =>(
                    <Cards 
                        key={index}
                        backgroundNewLabel={card.backgroundNewLabel}
                        nameNewLabel={card.nameNewLabel}
                        image={card.image}
                        brand={card.brand}
                        title={card.title}
                        priceNew={card.priceNew}
                        priceOld={card.priceOld}
                        rating={card.rating}
                        renderRatingIcons={renderRatingIcons}
                    />
                  ))
                }
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                {
                  armchairData.map((card, index) =>(
                    <Cards 
                        key={index}
                        backgroundNewLabel={card.backgroundNewLabel}
                        nameNewLabel={card.nameNewLabel}
                        image={card.image}
                        brand={card.brand}
                        title={card.title}
                        priceNew={card.priceNew}
                        priceOld={card.priceOld}
                        rating={card.rating}
                        renderRatingIcons={renderRatingIcons}
                    />
                  ))
                }
              </Row>
            </Carousel.Item>
          </Carousel>
          <Row>
            <Col className="d-flex justify-content-center">
              <Pagination>
                <Pagination.Item onClick={() => handlePageClick(0)} active={index === 0}>
                  <FaCircle />
                </Pagination.Item>
                <Pagination.Item onClick={() => handlePageClick(1)} active={index === 1}>
                  <FaCircle />
                </Pagination.Item>
              </Pagination>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Trending;
