import React from "react";
import Layout from '../components/Layouts/Layout';
import ServeFurniture from "./ServeFurniture";
import FurnitureCollections from "./FurnitureCollections";
import Trending from "./Trending";
import SpecialOffer from "./SpecialOffer";
import OurProducts from "./OurProducts";
import OurCustomer from "./OurCustomer";
import OurLatestArticles from "./OurLatestArticles";


function Home() {
  return (
    <>
      <Layout>
        <ServeFurniture />
        <FurnitureCollections />
        <Trending />
        <SpecialOffer />
        <OurProducts />
        <OurCustomer />
        <OurLatestArticles />
      </Layout>
    </>
  );
}


export default Home;
