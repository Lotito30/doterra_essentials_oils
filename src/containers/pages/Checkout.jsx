import Layout from "hocs/layouts/Layout";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { refresh } from "../../redux/actions/auth";
import {
  get_payment_total,
  get_client_token,
  process_payment,
} from "../../redux/actions/payment";
import DropIn from "braintree-web-drop-in-react";
import { Oval } from "react-loader-spinner";
import { countries } from "../../helpers/FixedCountries";
import ShippingForm from "components/checkout/ShippingForm";
import { Helmet } from "react-helmet-async";

{
  /* <Oval
  visible={true}
  height="20"
  width="20"
  color="#FFF"
  ariaLabel="oval-loading"
  wrapperStyle={{}}
  wrapperClass=""
/>; */
}
const Checkout = ({
  isAuthenticated,
  shipping,
  items,
  get_payment_total,
  get_client_token,
  process_payment,
  user,
  clientToken,
  made_payment,
  loading,
  original_price,
  total_amount,
  total_compare_amount,
  shipping_cost,
}) => {
  const paymentMethods = [
    { id: "cash", label: "Cash on Delivery" },
    { id: "credit", label: "Credit Card" },
  ];

  const [selectedMethod, setSelectedMethod] = useState(paymentMethods[0].id);

  const [formData, setFormData] = useState({
    full_name: "",
    address_line_1: "",
    address_line_2: "",
    city: "",
    state_province_region: "",
    postal_zip_code: "",
    country_region: "United Arab Emirates",
    telephone_number: "",
    coupon_name: "",
    shipping_id: 0,
  });

  const [data, setData] = useState({
    instance: {},
  });
  const {
    full_name,
    address_line_1,
    address_line_2,
    city,
    state_province_region,
    postal_zip_code,
    country_region,
    telephone_number,
    shipping_id,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const buy = async (e) => {
    e.preventDefault();
    let nonce = await data.instance.requestPaymentMethod();
    process_payment(
      nonce,
      shipping_id,
      //  "",
      full_name,
      address_line_1,
      address_line_2,
      city,
      state_province_region,
      postal_zip_code,
      country_region,
      telephone_number
    );
  };

  useEffect(() => {
    const FecthClient = async () => {
      await get_client_token();
    };
    FecthClient();
  }, [user]);

  useEffect(() => {
    const FecthPaymentTotal = async () => {
      await get_payment_total(shipping_id);
    };
    FecthPaymentTotal();
  }, [shipping_id]);

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (made_payment) {
    return <Navigate to="/thankyou" />;
  }

  const handleSelectMethod = (methodId) => {
    setSelectedMethod(methodId);
  };

  const renderShipping = () => {
    if (shipping && shipping !== null && shipping !== undefined) {
      return (
        <div>
          {shipping.map((shipping_option, index) => (
            <div key={index}>
              <input
                onChange={(e) => onChange(e)}
                value={shipping_option.id}
                name="shipping_id"
                type="radio"
                required
              />
              <label className="form-check-label ml-4">
               {shipping_option.time_to_delivery} - <span className="text-green-500">{shipping_option.price} AED</span>
              </label>
            </div>
          ))}
        </div>
      );
    }
  };

  const renderPaymentInfo = () => {
    if (!clientToken) {
      return;
    } else {
      return (
        <>
          <DropIn
            options={{
              authorization: clientToken,
              //  paypal: {
              //    flow: "vault",
              //  },
            }}
            onInstance={(instance) => (data.instance = instance)}
          />
        </>
      );
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Checkout | doTERRA</title>
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
          <form
            className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16"
            onSubmit={(e) => buy(e)}
          >
            <section aria-labelledby="cart-heading" className="lg:col-span-7">
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>

              <ShippingForm
                full_name={full_name}
                address_line_1={address_line_1}
                address_line_2={address_line_2}
                city={city}
                state_province_region={state_province_region}
                postal_zip_code={postal_zip_code}
                telephone_number={telephone_number}
                countries={countries}
                onChange={onChange}
                buy={buy}
                user={user}
                renderShipping={renderShipping}
                total_amount={total_amount}
                total_compare_amount={total_compare_amount}
                shipping_cost={shipping_cost}
                shipping_id={shipping_id}
                shipping={shipping}
              />
            </section>

            {/* Order summary */}
            <section
              aria-labelledby="summary-heading"
              className="bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5 mt-4"
            >
              <h2
                id="summary-heading"
                className="text-lg font-medium text-gray-900"
              >
                Order summary
              </h2>
              {/* RADIO INPUTS SHIPPING */}
              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <dt className="flex items-center text-sm text-gray-600">
                  <span>Shipping </span>
                  <a
                    href="#"
                    className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">
                      Learn more about how shipping is calculated
                    </span>
                  </a>
                </dt>
                <dd className="w-4/5 text-sm font-medium text-gray-900">
                  {renderShipping()}
                </dd>
              </div>
              <div className="mt-6 border-t border-gray-200">
                {items &&
                  items !== null &&
                  items !== undefined &&
                  items.length !== 0 &&
                  items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between mt-1">
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
              <dl className="mt-5">
                <div className="flex items-center justify-between">
                  <span className="sr-only">Subtotal</span>
                  <dt className="text-sm text-gray-600 font-bold">Subtotal</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    {original_price} AED
                  </dd>
                </div>
                <div className="flex items-center justify-between mt-3 mb-2">
                  <span className="sr-only">Shipping selected</span>
                  <dt className="text-sm text-gray-600">Shipping selected</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    {shipping_cost} AED
                  </dd>
                </div>

                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                  <dt className="text-base font-medium text-gray-900">
                    Order total
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                    {total_amount} AED
                  </dd>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-md">
                    <h2 className="text-2xl font-bold mb-6">
                      Choose your payment
                    </h2>

                    <div className="space-y-4">
                      {paymentMethods.map((method) => (
                        <div
                          key={method.id}
                          onClick={() => handleSelectMethod(method.id)}
                          className={`cursor-pointer p-4 border ${
                            selectedMethod === method.id
                              ? "border-blue-500 bg-blue-100"
                              : "border-gray-300 hover:border-blue-500 hover:bg-blue-50"
                          } rounded-md flex items-center justify-between`}
                        >
                          <span className="text-lg">{method.label}</span>
                          {selectedMethod === method.id && (
                            <svg
                              className="w-6 h-6 text-blue-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>

                    {selectedMethod && (
                      <div className="mt-4">
                        {selectedMethod === "credit" ? (
                          <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
                            {renderPaymentInfo()}
                          </div>
                        ) : (
                          <p className="bg-gray-100 p-2 rounded-sm">
                            You have chosen the payment method 'Cash on
                            Delivery.' Please be prepared to pay in cash when
                            your order is delivered.
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="mt-6">
                    {loading ? (
                      <button className="inline-block text-center w-full bg-orange-standard border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-black focus:outline-none focus:ring-0  transition ease-in-out duration-300">
                        <Oval
                          visible={true}
                          height="20"
                          width="20"
                          color="#FFF"
                          ariaLabel="oval-loading"
                          wrapperStyle={{}}
                          wrapperClass=""
                        />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="inline-block text-center w-full bg-orange-standard border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-black focus:outline-none focus:ring-0  transition ease-in-out duration-300"
                      >
                        Place order
                      </button>
                    )}
                  </div>
                </div>
              </dl>
            </section>
          </form>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.Auth.isAuthenticated,
  user: state.Auth.user,
  items: state.Cart.items,
  total_items: state.Cart.total_items,
  amount: state.Cart.amount,
  shipping: state.Shipping.shipping,
  clientToken: state.Payment.clientToken,
  // made_payment: state.payment.made_payment,
  loading: state.Payment.loading,
  original_price: state.Payment.original_price,
  // total_after_coupon: state.Payment.total_after_coupon,
  total_amount: state.Payment.total_amount,
  total_compare_amount: state.Payment.total_compare_amount,
  // estimated_tax: state.Payment.estimated_tax,
  shipping_cost: state.Payment.shipping_cost,
  // coupon: state.Coupons.coupon,
});

export default connect(mapStateToProps, {
  refresh,
  get_payment_total,
  get_client_token,
  process_payment,
})(Checkout);
