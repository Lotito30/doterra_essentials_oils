import Layout from "hocs/layouts/Layout";
import { Helmet } from "react-helmet-async";
import {
  get_items,
  get_total,
  get_item_total,
  remove_item,
  update_item,
} from "../../redux/actions/cart";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import CartItem from "components/cart/CartItem";
import { Link, useNavigate } from "react-router-dom";
import { setAlert } from "../../redux/actions/alert";
import { get_shipping_options } from "../../redux/actions/shipping";

function Cart({
  get_items,
  get_total,
  get_item_total,
  isAuthenticated,
  items,
  amount,
  compare_amount,
  total_items,
  remove_item,
  update_item,
  setAlert,
  get_shipping_options,

}) {
  const navigate = useNavigate()
  const [render, setRender] = useState(false);
  
  useEffect(() => {
    const fetchItems = async () => {
      if (!isAuthenticated) {
        navigate('/')
        return
      }
      await get_items();
      await get_total();
      await get_item_total();
      await get_shipping_options();
    }
    fetchItems()
  }, [render,isAuthenticated, navigate]);

  const showItems = () => {
    return (
      <div>
        {isAuthenticated &&
        isAuthenticated !== null &&
        isAuthenticated !== undefined &&
          items &&
          items !== null &&
          items !== undefined &&
          items.length !== 0 &&
          items.map((item, index) => {
            let count = item.count;
            return (
              <div key={index}>
                <CartItem
                  item={item}
                  count={count}
                  update_item={update_item}
                  remove_item={remove_item}
                  render={render}
                  setRender={setRender}
                  setAlert={setAlert}
                />
              </div>
            );
          })}
      </div>
    );
  };

  const checkoutButton = () => {
    if (total_items < 1) {
      return (
        <Link
          to="/shop"
          className="inline-block text-center w-full bg-orange-standard border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-black focus:outline-none focus:ring-0  transition ease-in-out duration-300"
        >
          Shop
        </Link>
      );
    } else if (!isAuthenticated) {
      return (
        <Link
          to="/signin"
          className="inline-block text-center w-full bg-orange-standard border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-black focus:outline-none focus:ring-0  transition ease-in-out duration-300"
        >
          Sign in
        </Link>
      );
    } else {
      return (
        <Link
          to="/checkout"
          className="inline-block w-full text-center bg-orange-standard border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-black focus:outline-none focus:ring-0  transition ease-in-out duration-300"
        >
          Checkout
        </Link>
      );
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Cart | doTERRA</title>
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
      <div className="bg-white">
        <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Shopping Cart Items ({total_items})
          </h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
            <section aria-labelledby="cart-heading" className="lg:col-span-7">
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>

              <ul
                role="list"
                className="border-t border-b border-gray-200 divide-y divide-gray-200"
              >
                {isAuthenticated && showItems()}
              </ul>
            </section>

            {/* Order summary */}
            <section
              aria-labelledby="summary-heading"
              className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
            >
              <h2
                id="summary-heading"
                className="text-lg font-medium text-gray-900"
              >
                Order summary
              </h2>
              <div className="mt-2">
                {items &&
                  items !== null &&
                  items !== undefined &&
                  items.length !== 0 &&
                  items.map((item, index) => (
                    <div className="flex items-center justify-between mt-0.5">
                      <span className="sr-only">
                        map de items con su nombre, valor unitario y precio
                        multiplicado por la cantidad de productos comprados
                      </span>
                      <dt className="text-sm text-gray-600">
                        {item.product.name} x {item.count}
                      </dt>

                      <dd className="text-sm font-medium text-gray-900">
                        {(parseFloat(item.product.price) * item.count).toFixed(
                          2
                        )}{" "}
                        AED
                      </dd>
                    </div>
                  ))}
              </div>
              <dl className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Subtotal</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    {amount.toFixed(2)} AED
                  </dd>
                </div>
                {/* <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <dt className="flex items-center text-sm text-gray-600">
                  <span>Shipping estimate</span>
                  <Link href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Learn more about how shipping is calculated</span>
                    <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </dt>
                <dd className="text-sm font-medium text-gray-900">5.00 AED</dd>
              </div> */}
                {/* <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <dt className="flex text-sm text-gray-600">
                  <span>Tax estimate</span>
                  <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Learn more about how tax is calculated</span>
                    <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-gray-900">$8.32</dd>
              </div> */}
                {/* <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <dt className="text-base font-medium text-gray-900">Order total</dt>
                <dd className="text-base font-medium text-gray-900">{amount.toFixed(2)} AED</dd>
              </div> */}
              </dl>

              <div className="mt-6 w-full">{checkoutButton()}</div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.Auth.isAuthenticated,
  items: state.Cart.items,
  // wishlist_items: state.Wishlist.items,
  amount: state.Cart.amount,
  compare_amount: state.Cart.compare_amount,
  total_items: state.Cart.total_items,
  // shipping: state.Shipping.shipping,
});

export default connect(mapStateToProps, {
  get_items,
  get_total,
  get_item_total,
  remove_item,
  update_item,
  setAlert,
  // remove_wishlist_item
  get_shipping_options,

})(Cart);
