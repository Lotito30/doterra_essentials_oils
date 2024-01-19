import Blog from "components/home/Blog";
import CTA from "components/home/CTA";
import Content from "components/home/Content";
import Featured from "components/home/Featured";
import Features from "components/home/FeaturesSection";
import Header from "components/home/Header";
import Statistic from "components/home/Statistic";
// import Footer from "components/navigation/Footer";
// import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import { connect } from "react-redux";
import {
  get_products_by_arrival,
  get_products_by_sold,
} from "../../redux/actions/products";
import ProductsArrival from "components/home/ProductsArrival";
import ProductsSold from "components/home/ProductsSold";

function Home({
  get_products_by_arrival,
  get_products_by_sold,
  products_arrival,
  products_sold,
  isAuthenticated,
  user,
}) {
  useEffect(() => {
    // window.scrollTo(0, 0)
    get_products_by_arrival();
    get_products_by_sold();
  }, []);

  return (
    <Layout>
      <Header user={user} isAuthenticated={isAuthenticated} />
      <Statistic />
      <Featured />
      <ProductsArrival data={products_arrival} />
      <ProductsSold data={products_sold} />
      <Features />
      <CTA />
      <Content />
      <Blog />
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  products_arrival: state.Products.products_arrival,
  products_sold: state.Products.products_sold,
  isAuthenticated: state.Auth.isAuthenticated,
  user: state.Auth.user,
});

export default connect(mapStateToProps, {
  get_products_by_arrival,
  get_products_by_sold,
})(Home);
