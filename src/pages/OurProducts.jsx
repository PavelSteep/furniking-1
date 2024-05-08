import React, { useState } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/OurProducts.css'
import CardsOurProducts from '../components/Layouts/CardsOurProducts';

import Image1 from '../assets/ourProducts/OurProducts-1.jpg';
import Image2 from '../assets/ourProducts/OurProducts-2.jpg';
import Image3 from '../assets/ourProducts/OurProducts-3.jpg';
import Image4 from '../assets/ourProducts/OurProducts-4.jpg';
import Image5 from '../assets/ourProducts/OurProducts-5.jpg';
import Image6 from '../assets/ourProducts/OurProducts-6.jpg';
import Image7 from '../assets/ourProducts/OurProducts-7.jpg';
import Image8 from '../assets/ourProducts/OurProducts-8.jpg';


const ourProductsData = [
  {
    id:'0001',
    backgroundNewLabel:'var(--limerick)',
    nameNewLabel:'Sale',
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
    brand:'SOFA',
    title:'Modern Sofa',
    priceNew:'$120',
    priceOld:'$150',
    rating:4,
  },
  {
    id:'0003',
    backgroundNewLabel:'var(--bright-red)',
    nameNewLabel:'-30%',
    image:Image3,
    brand:'SOFA',
    title:'Microfiber Sofa',
    priceNew:'$130',
    priceOld:'$150',
    rating:5,
  },
  {
    id:'0004',
    backgroundNewLabel:'var(--limerick)',
    nameNewLabel:'Sale',
    image:Image4,
    brand:'TABBLE',
    title:'Wood Coffee Tables',
    priceNew:'$100',
    priceOld:'$120',
    rating:4,
  },
  {
    id:'0005',
    backgroundNewLabel:'var(--bright-red)',
    nameNewLabel:'-30%',
    image:Image5,
    brand:'CHAIR',
    title:'Acacia Wood Club Chairs',
    priceNew:'$100',
    priceOld:'$120',
  },
  {
    id:'0006',
    backgroundNewLabel:'var(--limerick)',
    nameNewLabel:'Sale',
    image:Image6,
    brand:'BENCH',
    title:'Amalia Cowhide Bench',
    priceNew:'$130',
    priceOld:'$150',
    rating:4,
  },
  {
    id:'0007',
    backgroundNewLabel:'var(--sky-blue)',
    nameNewLabel:'New',
    image:Image7,
    brand:'STORAGE',
    title:'Juno-Hinged Lid Storage',
    priceNew:'$180',
    priceOld:'$250',
    rating:5,
  },
  {
    id:'0008',
    backgroundNewLabel:'var(--sky-blue)',
    nameNewLabel:'New',
    image:Image8,
    brand:'FURNITURE',
    title:'Delicia 3 Piece Living Room',
    priceNew:'$120',
    priceOld:'$150',
    rating:4,
  },
];



const renderRatingIcons = (rating) => {
  const stars = [];
  for (let a = 0; a < 5; a++) {
    if (a < rating) {
      // Закрашиваем звезды, чьи индексы меньше значения рейтинга, в зеленый цвет
      stars.push(
        <i key={a} className="bi bi-star" style={{ color: '#7AC751', textShadow: '0 0 0.1em green', borderColor: 'green' }}></i>
      );
    } else {
      // Оставляем остальные звезды как есть (закрашенные или не закрашенные)
      stars.push(
        <i key={a} className="bi bi-star"></i>
      );
    }
  }
  return stars;
}


function OurProducts() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState('next');

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handlePageClick = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleNextPage = () => {
    // Определяем новый индекс в зависимости от текущего направления и индекса
    let newIndex;
    if (direction === 'next') {
      newIndex = index === ourProductsData.length - 1 ? 0 : index + 1;
    } else {
      newIndex = index === 0 ? ourProductsData.length - 1 : index - 1;
    }
  
    // Определяем новое направление в зависимости от текущего направления
    const newDirection = direction === 'next' ? 'prev' : 'next';
  
    // Устанавливаем новый индекс и направление
    setIndex(newIndex);
    setDirection(newDirection);
  };
  
  return(
    <>
      <section className="section_our_products">
        <Container fluid>
          <Row>
            <Col lg={{span:8, offset:2}}>
              <h2 className="text-center">OUR PRODUCTS</h2>
              <ul className="list-inline text-center">
                <li className="list-inline-item"><p>All Products</p></li>
                <li className="list-inline-item"><p>Best Sellers</p></li>
                <li className="list-inline-item"><p>New Arrivals</p></li>
                <li className="list-inline-item"><p>Todays Deals</p></li>
              </ul>
            </Col>
          </Row>
          {/* <Row> */}
          <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
            <Carousel.Item>
              <Row>
                {
                  ourProductsData.map((card, index) =>(
                    <CardsOurProducts 
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
                  ourProductsData.map((card, index) =>(
                    <CardsOurProducts 
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
          <Row className="pagination_content">
            <Col className="d-flex justify-content-between align-items-center offset-md-3">
              <div className="offset-md-5 button_first_left">
                <button className="btn btn-primary" onClick={handleNextPage}>Next page -&gt;</button> 
              </div>
              <div className="page_number">
                <span className="mx-2 col_pagination_span_first">Page <span className="mx-2 col_pagination_span_number">{index + 1}</span></span>
                <span className="col_pagination_span_second">of {ourProductsData.length}</span>
              </div>
              <div className="button_arrows">
                <button className="btn btn-primary" onClick={() => handlePageClick(index + 1)} disabled={index === 1}>
                  <FaChevronLeft />
                </button>
                <button className="btn btn-primary" onClick={() => handlePageClick(index - 1)} disabled={index === 0}>
                  <FaChevronRight />
                </button>
              </div>
            </Col>
          </Row>
          {/* </Row> */}
        </Container>
      </section>
    </>
  );
}

export default OurProducts;
