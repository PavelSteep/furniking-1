import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/SpecialOffer.css'

import Offer1 from '../assets/specialOffer/Offer-1.jpg';
import Offer2 from '../assets/specialOffer/Offer-2.jpg';


const specialOfferData = [
  {
    id:'0001',
    backgroundNewLabel:'var(--sky-blue)',
    nameNewLabel:'40% 0ff',
    backgroundImage:Offer1,
    title:'Living Room Furniture',
    paragraph:'You don \'t have a chair. Are you ready for <br /> growth? Shop with us 40% discount!',
    priceNew:'$150',
    priceOld:'$250',
    daysHrsMinSecsColor:'#7AC751',
    daysNamber:'10',
    daysText:'DAYS',
    hrsNamber:'15',
    hrsText:'HRS',
    minNamber:'30',
    minText:'MIN',
    secsNamber:'22',
    secsText:'SECS'
  },
  {
    id:'0002',
    backgroundNewLabel:'var(--sky-blue)',
    nameNewLabel:'50% off',
    backgroundImage:Offer2,
    title:'Modern chair',
    paragraph:'Hot chairs of the modern era are now <br /> available in our stock.',
    priceNew:'$75',
    priceOld:'$150',
    daysHrsMinSecsColor:'#7AC751',
    daysNamber:'15',
    daysText:'DAYS',
    hrsNamber:'08',
    hrsText:'HRS',
    minNamber:'20',
    minText:'MIN',
    secsNamber:'12',
    secsText:'SECS'
  }

];


function SpecialOffer() {
  return(
    <>
      <section className="special_offer">
        <Container fluid>
          <Row>
            <h2 className="text-center special_offer_first_h2">SPECIAL OFFER</h2>
          </Row>
          <Row>
            {
              specialOfferData.map((item, index) => 
                <Col key={index} sm={12} lg={6} xl={6} className="col">
                  <div className="special_offer_card">
                    <div className="section_content" style={{ backgroundImage: `url(${item.backgroundImage})` }}>
                      <h2>{item.title}</h2>
                      <p dangerouslySetInnerHTML={{ __html: item.paragraph }}></p>
                      <div className="content-wrapper">
                        <div className="custom-menu">
                          <span>{item.priceNew}</span>
                          <span>{item.priceOld}</span>
                          <Button className="custom-button">SHOP NOW</Button>
                        </div>
                      </div>
                      <div className="custom-statistics">
                        <ul>
                          <li style={{backgroundColor: item.daysHrsMinSecsColor}}>
                            <span className="number">{item.daysNamber}</span>
                            <span className="text">{item.daysText}</span>
                          </li>
                          <li style={{backgroundColor: item.daysHrsMinSecsColor}}>
                            <span className="number">{item.hrsNamber}</span>
                            <span className="text">{item.hrsText}</span>
                          </li>
                          <li style={{backgroundColor: item.daysHrsMinSecsColor}}>
                            <span className="number">{item.minNamber}</span>
                            <span className="text">{item.minText}</span>
                          </li>
                          <li style={{backgroundColor: item.daysHrsMinSecsColor}}>
                            <span className="number">{item.secsNamber}</span>
                            <span className="text">{item.secsText}</span>
                          </li>
                        </ul>
                      </div>
                      <div className="new_label">{item.nameNewLabel}</div>
                    </div>
                  </div>
                </Col>
              )
            }
          </Row>
        </Container>
      </section>
    </>
  );
}

export default SpecialOffer;
