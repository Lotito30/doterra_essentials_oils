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

import Cart from "components/cart/cart";
import { Oval } from "react-loader-spinner";

function Products({
  get_categories,
  categories,
  get_products,
  products,
  get_filtered_products,
  filtered_products,
  search_products,
  loading,
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
    const fetchCategories = async () => {
      await get_categories();
      await get_products();
    };
    fetchCategories();
    
  }, []);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    await get_filtered_products(category_id, price_range, sortBy, order);
    setFiltered(true);
  };

  const onDelete = async ()  => {
    setFormData({
      category_id: "0",
      price_range: "Any",
      sortBy: "created",
      order: "desc",
    });
    await get_filtered_products("0", "Any", "created", "desc");
  };

  const showProducts = () => {
    let results = [];
    let display = [];

    if (
      filtered_products &&
      filtered_products !== null &&
      filtered_products !== undefined &&
      filtered
    ) {
      filtered_products.map((product, index) => {
        return display.push(
          <div key={index}>
            <Cart data={product} />
          </div>
        );
      });
    } else if (
      search_products &&
      search_products.length > 0 &&
      search_products !== null &&
      search_products !== undefined
    ) {
      search_products.map((product, index) => {
        return display.push(
          <div key={index}>
            <Cart data={product} />
          </div>
        );
      });
    } else if (
      !filtered &&
      products &&
      products !== null &&
      products !== undefined
    ) {
      products.map((product, index) => {
        return display.push(
          <div key={index}>
            <Cart data={product} />
          </div>
        );
      });
    }

    for (let i = 0; i < display.length; i += 3) {
      results.push(
        <div
          key={i}
          className="mb-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3 xl:gap-x-8"
        >
          {display[i] ? display[i] : <div className=""></div>}
          {display[i + 1] ? display[i + 1] : <div className=""></div>}
          {display[i + 2] ? display[i + 2] : <div className=""></div>}
        </div>
      );
    }

    return results;
  };

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
      {/* Shop.js */}
      {loading ? (
        <div className="flex items-center justify-center h-screen">
        <div className="flex items-center justify-center w-20 px-10 py-4 text-base font-medium text-center bg-orange-standard transform rounded-xl ">
          <Oval
            visible={true}
            height="30"
            width="30"
            color="white"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />{" "}
        </div>
      </div>
      ) : (
        <Get_Products
          categories={categories}
          products={products}
          showProducts={showProducts}
          onSubmit={onSubmit}
          onChange={onChange}
          sortBy={sortBy}
          order={order}
          onDelete={onDelete}
          search_products={search_products}
        />
      )}
    </Layout>
    
  );
}
const mapStateToProps = (state) => ({
  categories: state.Categories.categories,
  products: state.Products.products,
  filtered_products: state.Products.filtered_products,
  search_products: state.Products.search_products,
  loading: state.Auth.loading,
});

export default connect(mapStateToProps, {
  get_categories,
  get_products,
  get_filtered_products,
})(Products);
