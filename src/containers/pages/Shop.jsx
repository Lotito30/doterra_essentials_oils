import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import { Helmet } from "react-helmet-async";
import Get_Products from "components/pages/Shop";
import { get_products } from "../../redux/actions/products";
import { get_categories } from "../../redux/actions/categories";
import { connect } from "react-redux";
import { useEffect } from "react";

function Products({ get_categories, categories, get_products, products }) {

  useEffect(() => {
    window.scrollTo(0, 0);
    get_categories();
    get_products()
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Shop | doTERRA</title>
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
        {/* <meta name="twitter:image" content={headerImg} /> */}
      </Helmet>
      <Navbar />
      <div className="pt-20">
        <Get_Products categories={categories} products={products}/>
      </div>
      <Footer />
    </Layout>
  );
}
const mapStateToProps = (state) => ({
  categories: state.Categories.categories,
  products:state.Products.products
});

export default connect(mapStateToProps, {
  get_categories,
  get_products,
})(Products);

