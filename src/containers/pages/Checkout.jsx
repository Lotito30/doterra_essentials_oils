import DropIn from "braintree-web-drop-in-react";
import ShippingForm from "components/checkout/ShippingForm";
import Layout from "hocs/layouts/Layout";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Oval } from "react-loader-spinner";
import { connect } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { countries } from "../../helpers/FixedCountries";
import { refresh } from "../../redux/actions/auth";
import { check_coupon, reset_coupon } from "../../redux/actions/coupons";
import {
  get_client_token,
  get_payment_total,
  process_payment,
} from "../../redux/actions/payment";
import { get_shipping_options } from "../../redux/actions/shipping";

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
  check_coupon,
  coupon,
  total_after_coupon,
  profile,
  reset_coupon,
  get_shipping_options,
}) => {
  const paymentMethods = [
    { id: "cash", label: "Cash on Delivery" },
    { id: "credit", label: "Credit Card" },
  ];

  const [selectedMethod, setSelectedMethod] = useState(paymentMethods[0].id);

  const [formData, setFormData] = useState({
    full_name: `${user?.first_name} ${user?.last_name}`,
    street: "",
    building_villa: "",
    department: "",
    city: "",
    district: "",
    postal_zip_code: "",
    country_region: "United Arab Emirates",
    telephone_number: user?.phone,
    coupon_name: "",
    shipping_id: "",
  });
  const apply_coupon = async (e) => {
    e.preventDefault();
    await check_coupon(coupon_name);
  };
  const [data, setData] = useState({
    instance: {},
  });
  const {
    full_name,
    street,
    building_villa,
    department,
    city,
    district,
    postal_zip_code,
    country_region,
    telephone_number,
    coupon_name,
    shipping_id,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const buy = async (e) => {
    e.preventDefault();
    let nonce = await data.instance.requestPaymentMethod();
    await process_payment(
      nonce,
      shipping_id,
      coupon_name,
      full_name,
      street,
      building_villa,
      department,
      city,
      district,
      postal_zip_code,
      country_region,
      telephone_number
    );
    if (!made_payment) {
      setSelectedMethod("cash")
    }
  };
  const handleButtonClick = (newFormData) => {
    setFormData({
      ...formData,
      street: newFormData.street,
      building_villa: newFormData.building_villa,
      department: newFormData.department,
      city: newFormData.city,
      district: newFormData.district,
      postal_zip_code: newFormData.zipcode,
      country_region: newFormData.country_region,
      telephone_number: newFormData.phone,
    });
  };

  useEffect(() => {
    const FecthClient = async () => {
      reset_coupon();
      await get_client_token();
    };
    FecthClient();
  }, []);

  useEffect(() => {
    const FecthPaymentTotal = async () => {
      await get_payment_total(
        shipping_id,
        coupon?.name || "default"
      );
    };
    FecthPaymentTotal();
  }, [shipping_id, coupon]);

  useEffect(() => {
    const fetchItems = async () => {
      await get_shipping_options();
    };
    fetchItems();
  }, [isAuthenticated, get_shipping_options]);

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
                {shipping_option.time_to_delivery} -{" "}
                <span className="text-black">{shipping_option.price} AED</span>
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
  if (!isAuthenticated) {
    return <Navigate to={"/"} />;
  }
  if (made_payment) {
    return <Navigate to={"/thankyou"} />;
  }
  

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
      {}
      <div className="max-w-2xl mx-auto pb-12 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* FORMULARIO PARA AGREGAR CUPON (ARREGLAR) */}
        <div className="relative">
          <form
            className="border-t border-gray-200 pt-4 flex items-center justify-end"
            onSubmit={(e) => apply_coupon(e)}
          >
            <span className="sr-only">Coupon</span>

            <dd className="text-sm font-medium text-gray-900 flex items-center gap-2">
              <input
                name="coupon_name"
                type="text"
                className="placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                onChange={(e) => onChange(e)}
                value={coupon_name}
                placeholder="Enter your coupon"
                disabled={coupon}
                required
              />
              <button
                type="submit"
                className="inline-flex rounded-md bg-orange-standard px-1 py-2 text-sm font-medium text-white shadow hover:bg-black transition duration-300 ease-in-out"
                disabled={coupon}
              >
                Apply coupon
              </button>
            </dd>
          </form>
          {/* AGREGAR CONDICION CUANDO AGREGA EL CUPON */}
          <div className="absolute right-0 mt-2">
            <span className="inline-flex items-center justify-center gap-1 rounded-lg px-2.5 py-0.5 text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                />
              </svg>
              Enter your coupon code if you have one.
            </span>
          </div>
        </div>
        <form
          className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16"
          onSubmit={(e) => buy(e)}
        >
          <section aria-labelledby="cart-heading" className="lg:col-span-6">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ShippingForm
              full_name={full_name}
              street={street}
              building_villa={building_villa}
              department={department}
              city={city}
              district={district}
              postal_zip_code={postal_zip_code}
              telephone_number={telephone_number}
              countries={countries}
              onChange={onChange}
              buy={buy}
              user={user}
              total_amount={total_amount}
              total_compare_amount={total_compare_amount}
              shipping_cost={shipping_cost}
              shipping_id={shipping_id}
              shipping={shipping}
              profile={profile}
              handleButtonClick={handleButtonClick}
            />
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="bg-gray-50 rounded-lg px-2 py-6 sm:p-6 lg:p-4 lg:mt-0 lg:col-span-6 mt-4"
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

            <div className="mt-6 border-t border-b border-gray-200 py-1">
              {items &&
                items !== null &&
                items !== undefined &&
                items.length !== 0 &&
                items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between mt-1"
                  >
                    <span className="sr-only">
                      map de items con su nombre, valor unitario y precio
                      multiplicado por la cantidad de productos comprados
                    </span>
                    <dt className="text-sm text-black font-bold">
                      {item.product.name} x {item.count}
                    </dt>

                    <dd className="text-sm font-medium text-gray-900">
                      {(parseFloat(item.product.price) * item.count).toFixed(2)}{" "}
                      AED
                    </dd>
                  </div>
                ))}
            </div>
            <dl className="mt-8">
              <div className="flex items-center justify-between">
                <span className="sr-only">Subtotal</span>
                <dt className="text-sm text-gray-600">Subtotal</dt>
                <dd className="text-sm font-medium text-gray-900">
                  {original_price} AED
                </dd>
              </div>
              {coupon && coupon !== null && coupon !== undefined && (
                <div className="flex items-center justify-between mt-3 mb-2">
                  <span className="sr-only">Discount selected</span>
                  <dt className="text-sm text-green-500">Discount</dt>
                  <dd className="text-sm font-medium text-green-500">
                    - {coupon.discount_price} AED
                  </dd>
                </div>
              )}{" "}
              <div className="flex items-center justify-between mt-3 mb-2">
                <span className="sr-only">Shipping selected</span>
                <dt className="text-sm text-gray-600">Shipping</dt>
                <dd className="text-sm font-medium text-gray-900">
                  {shipping_cost} AED
                </dd>
              </div>
              {coupon && coupon !== null && coupon !== undefined ? (
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                  <dt className="text-black font-bold text-2xl">Order total</dt>
                  <dd className="text-xl font-medium text-gray-900">
                    {(
                      parseFloat(total_after_coupon) + parseFloat(shipping_cost)
                    ).toFixed(2)}{" "}
                    AED
                  </dd>
                </div>
              ) : (
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                  <dt className="text-xl text-gray-900 font-bold">
                    Order total
                  </dt>
                  <dd className="text-xl font-medium text-gray-900">
                    {total_amount} AED
                  </dd>
                </div>
              )}
              <div className=" pt-4">
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
                          You have chosen the payment method 'Cash on Delivery.'
                          Please be prepared to pay in cash when your order is
                          delivered.
                        </p>
                      )}
                    </div>
                  )}
                </div>
                {/* BUTTON PLACE ORDER */}
                <div className="pt-3">
                  {loading ? (
                    <button className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-orange-standard rounded-xl hover:bg-black focus:outline-none focus:ring-offset-2 focus:ring-0">
                      <Oval
                        visible={true}
                        height="20"
                        width="20"
                        color="#FFF"
                        ariaLabel="oval-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                      />{" "}
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-orange-standard rounded-xl hover:bg-black focus:outline-none focus:ring-offset-2 focus:ring-0"
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
  made_payment: state.Payment.made_payment,
  loading: state.Payment.loading,
  original_price: state.Payment.original_price,
  total_after_coupon: state.Payment.total_after_coupon,
  total_amount: state.Payment.total_amount,
  total_compare_amount: state.Payment.total_compare_amount,
  // estimated_tax: state.Payment.estimated_tax,
  shipping_cost: state.Payment.shipping_cost,
  coupon: state.Coupons.coupon,
  profile: state.Profile.profile,
});

export default connect(mapStateToProps, {
  refresh,
  get_payment_total,
  get_client_token,
  process_payment,
  check_coupon,
  reset_coupon,
  get_shipping_options,
})(Checkout);
