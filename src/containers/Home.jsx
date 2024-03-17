import headerImg from "assets/img/error404.webp";
import CarouselProducts from "components/carousel/CarouselProducts";
import Blog from "components/home/Blog";
import CTA from "components/home/CTA";
import Content from "components/home/Content";
import Featured from "components/home/Featured";
import Features from "components/home/FeaturesSection";
import Header from "components/home/Header";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { connect } from "react-redux";
import {
  get_products,
  get_products_by_arrival,
  get_products_by_sold,
} from "../redux/actions/products";

function Home({
  get_products_by_arrival,
  get_products_by_sold,
  products_arrival,
  products_sold,
  get_products,
  products,
}) {
  useEffect(() => {
    const fetchProducts = async () =>{
      get_products_by_arrival();
      get_products_by_sold();
      get_products();
    }
    fetchProducts() 
  }, [get_products_by_arrival, get_products_by_sold, get_products]);
  
  return (
    <Layout>
      <Helmet>
        <title>Home | doTERRA</title>
        <meta
          name="description"
          content="Explore doTERRA's pure, potent essential oils. Experience nature's transformative power for wellness. Join us on your journey to health and vitality."
        />
        <meta
          name="keywords"
          content="doTERRA Oils, Natural Wellness, Health Products, Essential Oils, Aromatherapy, Pure Extracts, Sustainably Sourced"
        />
        <meta name="robots" content="all" />
        <meta name="author" content="Lotito" />
        <meta name="publisher" content="Lotito" />
        {/* <link rel="canonical" href="https://oilslotito.com.ae"/> */}

        <meta name="twitter:title" content="Home | doTERRA" />
        <meta
          name="twitter:description"
          content="Explore doTERRA's pure, potent essential oils. Experience nature's transformative power for wellness. Join us on your journey to health and vitality."
        />
        <meta name="twitter:image" content={headerImg} />
      </Helmet>
      <Header />
      {/* <Statistic /> */}
      <Featured/>
      {products_arrival?.length >= 3 && <CarouselProducts title={"New Arrivals"} description={"Explore the latest in our natural oil collection. Freshly curated, high-quality products await. Discover your new favorite today."} data={products_arrival} />}
      {products_sold?.length >= 3 && <CarouselProducts title={"Best Seller"} description={"Dive into our Best Sellers. These popular natural oils have won over our customers. Experience their charm and make them yours."} data={products_sold} />}
      <Features />
      <CTA />
      {products?.length >= 3 && <Content products={products}/>}
      <Blog />
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  products_arrival: state.Products.products_arrival,
  products_sold: state.Products.products_sold,
  products: state.Products.products,
});

export default connect(mapStateToProps, {
  get_products_by_arrival,
  get_products_by_sold,
  get_products,
})(Home);
