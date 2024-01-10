import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import { Helmet } from "react-helmet-async";
import Get_Products from "components/pages/Shop";
import {
  get_products,
  get_filtered_products,
} from "../../redux/actions/products";
import { get_categories } from "../../redux/actions/categories";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import ProductsArrival from "components/home/ProductsArrival";
import CartProducts from "components/cart/cartProductsMap";
import Cart from "components/cart/cart";
import CartShop from "components/cart/CartShop";

function Products({
  get_categories,
  categories,
  get_products,
  products,
  get_filtered_products,
  filtered_products,
}) {
  const [filtered, setFiltered] = useState(false);
  const [formData, setFormData] = useState({
    category_id: "0",
    price_range: "Any",
    sortBy: "created",
    order: "desc",
  });

  const { category_id, price_range, sortBy, order } = formData;

  useEffect(() => {
    window.scrollTo(0, 0);
    get_categories();
    get_products();
  }, []);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    get_filtered_products(category_id, price_range, sortBy, order);
    setFiltered(true)
  };


  const showProducts = () => {
    let results =[]
    let display =[]
  
  if (
    filtered_products &&
    filtered_products !== null &&
    filtered_products !== undefined &&
    filtered
  ){
    filtered_products.map((product,index) => {
      return display.push(
        <div key={index} className="mr-4 mb-1">
            <CartShop data={product}/>
        </div>
      )
    })
  }else if(
    !filtered &&
    products &&
    products !== null &&
    products !== undefined
  ){
    products.map((product,index) => {
      return display.push(
        <div key={index} className="mr-4 mb-12">
            <CartShop data={product}/>
        </div>
      )
    })
  }

  for (let i = 0; i < display.length; i+=3){
    results.push(
      <div key={i} className="grid md:grid-cols-3">
        {display[i] ? display[i] : <div className=""></div>}
        {display[i+1] ? display[i+1] : <div className=""></div>}
        {display[i+2] ? display[i+2] : <div className=""></div>}
      </div>
    )
  }

  return results
}

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
        {/* Shop.js */}
        <Get_Products categories={categories} products={products} showProducts={showProducts}/> 
      </div>
      <Footer />
    </Layout>
  );
}
const mapStateToProps = (state) => ({
  categories: state.Categories.categories,
  products: state.Products.products,
  filtered_products: state.Products.filtered_products,
});

export default connect(mapStateToProps, {
  get_categories,
  get_products,
  get_filtered_products,
})(Products);
