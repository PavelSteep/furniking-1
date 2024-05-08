import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import './media/mediaHeaderStyle.css';
import './media/mediaFooterStyle.css';
import './media/mediaServeFurniture.css';
import './media/mediaFurnitureCollections.css';
import './media/mediaTrendingStyle.css';
import './media/mediaSpecialOfferStyle.css';
import './media/mediaOurProducts.css';
import './media/mediaOurCustomer.css';
import './media/mediaOurLatestArticles.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
