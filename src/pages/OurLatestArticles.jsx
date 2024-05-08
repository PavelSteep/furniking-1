import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/OurLatestArticles.css'
import Cards3 from '../components/Layouts/CardsOurLatestArticles';

import ImageCard1 from '../assets/ourLatestArticles/Card-1.jpg';
import ImageCard2 from '../assets/ourLatestArticles/Card-2.jpg';
import ImageCard3 from '../assets/ourLatestArticles/Card-3.jpg';
import ImageCard4 from '../assets/ourLatestArticles/Card-4.jpg';
import table from '../assets/ourLatestArticles/table.png';

const ourLatestArticlesData = [
  {
    id:'0001',
    backgroundImage:ImageCard1,
    backgroundNewLabel:'var(--white-smoke)',
    image:table,
    brand:'FURNITURE',
    title:'Begineer guide buying minimal sofa',
    text:'Read more'
  },
  {
    id:'0002',
    backgroundImage:ImageCard2,
    backgroundNewLabel:'var(--white-smoke)',
    image:table,
    brand:'TABLE',
    title:'Buying best minimal computer table',
    text:'Read more'
  },
  {
    id:'0003',
    backgroundImage:ImageCard3,
    backgroundNewLabel:'var(--white-smoke)',
    image:table,
    brand:'BENCH',
    title:'How to choose best modern bench',
    text:'Read more'
  },
  {
    id:'0004',
    backgroundImage:ImageCard4,
    backgroundNewLabel:'var(--white-smoke)',
    image:table,
    brand:'CHAIR',
    title:'Best Summer Outfit Style in this Country',
    text:'Read more'
  }
];


function OurLatestArticles() {

 // Получаем текущую дату
 const currentDate = new Date();

 // Форматируем дату в строку
 const englishDate = currentDate.toLocaleString('en', { day: 'numeric', month: 'long', year: 'numeric' });

 // Добавляем дату в каждый элемент массива
 const articlesWithDate = ourLatestArticlesData.map(article => ({
   ...article,
   date: englishDate
 }));

  
  return(
    <>
      <section className="section_our_latest_articles">
        <Container fluid>
          <Row>
            <Col lg={{span:8, offset:2}}>
              <h2 className="text-center">Our Latest Articles</h2>
            </Col>
          </Row>
          <Row>
            {
              articlesWithDate.map((card, index) =>(
                <Cards3 
                    key={index}
                    backgroundImage={card.backgroundImage}
                    backgroundNewLabel={card.backgroundNewLabel}
                    image={card.image}
                    brand={card.brand}
                    title={card.title}
                    text={card.text}
                    publicationDate={englishDate}
                />
              ))
            }
          </Row>
        </Container>
      </section>
    </>
  );
}

export default OurLatestArticles;
