import React from "react";
import { Col, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

function CardsOurLatestArticles({ backgroundImage, backgroundNewLabel, image, brand, title, text, publicationDate }) {
  return (
    <Col lg={6} xl={5} className="mb-4 my-auto">
      <Card className="card-container">
        <div className="card-background" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="card-content">
            <div className="card-link-img">
              <Link to="/" className="card-backgroundNewLabel" style={{ backgroundColor: backgroundNewLabel }}>
                <img src={image} alt="table" className="img-fluid" />
                <p className="brand-text">{brand}</p>
              </Link>
              <p className="card-text">{publicationDate}</p>
            </div>
            <h5 className="custom-title">{title}</h5>
            <Link to="/">
              <p className="custom-text">{text}</p>
            </Link>
          </div>
        </div>
      </Card>
    </Col>
  );
}

export default CardsOurLatestArticles;
