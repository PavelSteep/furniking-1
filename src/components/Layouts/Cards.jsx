import React from "react";
import { Col, Card } from 'react-bootstrap';

import Favourite from '../../assets/trending/Favourite.png';
import Shop from '../../assets/trending/Shop.png';
import Compare from '../../assets/trending/Compare.png';
import View from '../../assets/trending/View.png';

function Cards({image, backgroundNewLabel, nameNewLabel, brand, title, priceNew, priceOld, rating, renderRatingIcons}) {
  return(
    <Col lg={4} xl={3} className="mb-4">
      <Card className="card-container">
        <div className="image-container">
          <Card.Img variant="top" src={image} className="card-image img-fluid" />
          <div className="icons-container">
            <img src={Favourite} alt="Favourite" />
            <img src={Shop} alt="Shop" />
            <img src={Compare} alt="Compare" />
            <img src={View} alt="View" />
          </div>
        </div>
        <Card.Body className="card-body">
          <div className="new-label" style={{ backgroundColor: backgroundNewLabel }}>{nameNewLabel}</div>
          <div className="body__card">
            <Card.Text className="brand-text">{brand}</Card.Text>
            <Card.Title className="custom-title">{title}</Card.Title>
            <div className="content-wrapper">
              <div className="custom-menu">
                <span>{priceNew}</span>
                <span>{priceOld}</span>
              </div>
              <div className="custom-rating" style={{ fontSize: '10px' }}>
                {renderRatingIcons(rating)}
              </div>
            </div>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </div>
        </Card.Body>
      </Card>
      {/* <Pagination className="justify-content-center mt-3">
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Next />
      </Pagination> */}
    </Col>
  );
}

export default Cards;
