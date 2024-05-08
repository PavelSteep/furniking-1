import React, { useState, useEffect } from "react";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../styles/ServeFurniture.css';


import armchair from '../assets/serveFurniture/armchair.png';
import Frame from '../assets/serveFurniture/Frame.png';
import Rectangle1 from '../assets/serveFurniture/Rectangle1.png';
import Rectangle2 from '../assets/serveFurniture/Rectangle2.png';

import freeDelivery from '../assets/serveFurniture/free-delivery.png';
import smartGift from '../assets/serveFurniture/smart-gift.png';
import wallet from '../assets/serveFurniture/wallet.png';
import support from '../assets/serveFurniture/support.png';


const serveFurnitureData = [
  {
    id:'0001',
    titleh4:'TOP COLLECTIONS 2023',
    titleh2:`We Serve Your <br /> Dream Furniture`,
    titleh5:'Get 50% off all products',
    imageMain: armchair,
    image1: Frame,
    image2: Rectangle1,
    image3: Rectangle2,
  },
  // Добавляем еще два объекта, чтобы иметь возможность пролистывать несколько слайдов
  {
    id:'0002',
    titleh4:'NEW COLLECTIONS 2024',
    titleh2:`We Serve Your <br /> Dream Furniture`,
    titleh5:'Get 20% off all products',
    imageMain: armchair,
    image1: Frame,
    image2: Rectangle1,
    image3: Rectangle2,
  },
  {
    id:'0003',
    titleh4:'POPULAR COLLECTIONS 2025',
    titleh2:`We Serve Your <br /> Dream Furniture`,
    titleh5:'Get 30% off all products',
    imageMain: armchair,
    image1: Frame,
    image2: Rectangle1,
    image3: Rectangle2,
  },
];

const serveFurnitureSecondData = [
  {
    id:'0001',
    image1: freeDelivery,
    image2: smartGift,
    image3: wallet,
    image4: support,
    title1:'Free Shipping',
    title2:'Smart Gift Card',
    title3:'Quick Payment',
    title4:'24/7 Support',
    paragraph1:'Orders over $100',
    paragraph2:'Buy $1000 to get card',
    paragraph3:'100% secure payment',
    paragraph4:'Quick support'
    
  },
  // Добавляем еще два объекта, чтобы иметь возможность пролистывать несколько слайдов
  {
    id:'0002',
    image1: freeDelivery,
    image2: smartGift,
    image3: wallet,
    image4: support,
    title1:'Free Shipping',
    title2:'Smart Gift Card',
    title3:'Quick Payment',
    title4:'24/7 Support',
    paragraph1:'Orders over $100',
    paragraph2:'Buy $1000 to get card',
    paragraph3:'100% secure payment',
    paragraph4:'Quick support'
  },
  {
    id:'0003',
    image1: freeDelivery,
    image2: smartGift,
    image3: wallet,
    image4: support,
    title1:'Free Shipping',
    title2:'Smart Gift Card',
    title3:'Quick Payment',
    title4:'24/7 Support',
    paragraph1:'Orders over $100',
    paragraph2:'Buy $1000 to get card',
    paragraph3:'100% secure payment',
    paragraph4:'Quick support'
  },
];

function ServeFurniture() {
  const [currentIndex, setCurrentIndex] = useState(0); // Текущий индекс слайда
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [direction, setDirection] = useState(null); // Направление перемещения карусели

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
  // const visibleImages1 = Math.min(serveFurnitureData.length, windowWidth >= 992 ? 3 : (windowWidth >= 768 ? 2 : 1));

  // Количество изображений, которые будут отображаться на экране в зависимости от ширины окна
  const visibleImages = windowWidth >= 992 ? 4 : (windowWidth >= 768 ? 3 : (windowWidth >= 576 ? 2 : 1));

  // Переход к следующему слайду
  const nextSlide = () => {
    setDirection('next'); // Устанавливаем направление перемещения
    setCurrentIndex((prevIndex) => (prevIndex + 1) % serveFurnitureData.length); // Увеличиваем текущий индекс на 1
  };

  // Переход к предыдущему слайду
  const prevSlide = () => {
    setDirection('prev'); // Устанавливаем направление перемещения
    setCurrentIndex((prevIndex) => (prevIndex - 1 + serveFurnitureData.length) % serveFurnitureData.length); // Уменьшаем текущий индекс на 1
  };

  // Сброс индекса к текущему видимому диапазону при достижении края карусели
  useEffect(() => {
    if (direction === 'next' && currentIndex === serveFurnitureData.length - 1) {
      setCurrentIndex(0); // Если мы достигли конца карусели, переходим к началу
    } else if (direction === 'prev' && currentIndex === 0) {
      setCurrentIndex(serveFurnitureData.length - 1); // Если мы достигли начала карусели, переходим к концу
    }
  }, [currentIndex, direction]);

  return(
    <>
      <section className="serve_furniture_collections">
        <Container fluid>
          <Row>
            <Col lg={12} md={12} className="my-auto" style={{ position:"relative" }}>
              <Carousel activeIndex={currentIndex} onSelect={setCurrentIndex} indicators={false}>
                {serveFurnitureData.map((item, index) => (
                  <Carousel.Item key={index}>
                    <Carousel.Caption>
                      <div className="serve_furniture_wrapper">
                        <div className="serve_furniture_map">
                          <h4>{item.titleh4}</h4>
                          <h2 className="mt-2 mb-4" dangerouslySetInnerHTML={{ __html: item.titleh2 }} />
                          <h5>{item.titleh5}</h5>
                          <Link to="/">
                            <Button className="custom-button">SHOP NOW</Button>
                          </Link>
                        </div>
                        <div className="custom-image">
                          <img src={item.imageMain} alt="armchair" className="img-fluid" />
                        </div>
                        <div className="serve_aside_wrapper">
                          <div className="serve-aside">
                            <img src={item.image1} alt="Frame" className="img-fluid"/>
                            <span>$120</span>
                            <p>Office Desk Chair</p>
                          </div>
                          <div className="serve-aside">
                            <img src={item.image2} alt="Rectangle1" className="img-fluid"/>
                            <span>$180</span>
                            <p>Home Alisa Sofa</p>
                          </div>
                          <div className="serve-aside">
                            <img src={item.image3} alt="Rectangle2" className="img-fluid"/>
                            <span>$250</span>
                            <p>Modern Chair</p>
                          </div>
                        </div>
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
              <div className="carousel-controls">
                <div className="circle first-left" onClick={prevSlide}></div>
                <div className="circle second-left" onClick={prevSlide}></div>
                <div className="circle strip" onClick={nextSlide}></div>
                <div className="circle right" onClick={nextSlide}></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
       {/* serve_furniture_delivery  */}
      <section className="serve_furniture_delivery">
        <Container fluid>
          <Row>
            <Col lg={12} className="mb-2">
              <Carousel>
                {serveFurnitureSecondData.map((item, index) => (
                  index < visibleImages && ( // Отображаем только видимые изображения
                  <Carousel.Item key={index}>
                    <Carousel.Caption>
                      <div className="carousel_delivery">
                        {Array(visibleImages).fill().map((_, i) => (
                          <div className={`delivery_wrapper wrapper-${i+1}`} key={i}>
                            <div className="delivery_img">
                              <img src={item[`image${i+1}`]} className="img-fluid" alt={`delivery-${i+1}`}/>
                            </div>
                            <div className="delivery_content">
                              <h4>{item[`title${i+1}`]}</h4>
                              <p>{item[`paragraph${i+1}`]}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Carousel.Caption>
                  </Carousel.Item>
                  )
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ServeFurniture;
