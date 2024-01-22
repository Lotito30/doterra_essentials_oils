import Layout from "hocs/layouts/Layout";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  CheckIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from "@heroicons/react/solid";
import { useEffect } from "react";
import CartItem from "components/cart/CartItem";
import { get_items, get_total, get_item_total } from "../../redux/actions/cart";
import { get_shipping_options } from "../../redux/actions/shipping";
import { RadioGroup } from "@headlessui/react";
import { useState } from "react";

const Checkout = ({
  isAuthenticated,
  items,
  amount,
  get_shipping_options,
  shipping,
}) => {
  const [selectedShipping, setSelectedShipping] = useState(
    shipping && shipping.length > 0 ? shipping[0] : null
  );

  useEffect(() => {
    console.log(selectedShipping);
    get_shipping_options();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <Layout>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Checkout
          </h1>
          <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
            <section aria-labelledby="cart-heading" className="lg:col-span-7">
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>

              <ul
                role="list"
                className="border-t border-b border-gray-200 divide-y divide-gray-200"
              >
                <div>
                  {items &&
                    items !== null &&
                    items !== undefined &&
                    items.length !== 0 &&
                    items.map((item, index) => {
                      let count = item.count;
                      return (
                        <div key={index}>
                          <li className="flex py-6 sm:py-10">
                            <div className="flex-shrink-0">
                              <img
                                src={item.product.photo}
                                alt=""
                                className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                              />
                            </div>

                            <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                              <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                <div>
                                  <div className="flex justify-between">
                                    <h3 className="text-sm">
                                      {item.product.name}
                                    </h3>
                                  </div>

                                  <p className="mt-1 text-sm font-medium text-gray-900">
                                    {item.product.price}
                                  </p>
                                </div>

                                <div className="mt-4 sm:mt-0 sm:pr-9">
                                  <label
                                    htmlFor="item_count"
                                    className="sr-only"
                                  >
                                    Quantity, {item.product.name}
                                  </label>
                                </div>
                              </div>
                            </div>
                          </li>
                        </div>
                      );
                    })}
                </div>
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

              <dl className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Subtotal</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    {amount.toFixed(2)} AED
                  </dd>
                </div>
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
                  <dd className="w-3/4 text-sm font-medium text-gray-900">
                    {shipping &&
                    shipping.length > 0 &&
                    shipping !== null &&
                    shipping !== undefined ? (
                      <RadioGroup
                        value={selectedShipping}
                        onChange={setSelectedShipping}
                        
                      >
                        <RadioGroup.Label className="sr-only">
                          Server size
                        </RadioGroup.Label>
                        <div className="space-y-2">
                          {shipping &&
                            shipping !== null &&
                            shipping !== undefined &&
                            shipping.map((plan) => (
                              <RadioGroup.Option
                                key={plan.name}
                                value={plan}
                                checked={JSON.stringify(plan) === JSON.stringify(selectedShipping)}
                                className={({ active, checked }) =>
                                  `${
                                    active
                                      ? "ring-2 ring-white/60 ring-offset-2 ring-offset-orange-standard"
                                      : ""
                                  }
                  ${checked ? "bg-orange-standard text-white" : "bg-white"}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                                }
                              >
                                {({ active, checked }) => (
                                  <>
                                    <div className="flex w-full items-center justify-between">
                                      <div className="flex items-center">
                                        <div className="text-sm">
                                          <RadioGroup.Label
                                            as="p"
                                            className={`font-medium  ${
                                              checked
                                                ? "text-white"
                                                : "text-gray-900"
                                            }`}
                                          >
                                            {plan.name}
                                          </RadioGroup.Label>
                                          <RadioGroup.Description
                                            as="span"
                                            className={`inline ${
                                              checked
                                                ? "text-white"
                                                : "text-gray-500"
                                            }`}
                                          >
                                            <span>{plan.time_to_delivery}</span>{" "}
                                            <span>{plan.price} AED</span>
                                          </RadioGroup.Description>
                                        </div>
                                      </div>
                                      {checked && (
                                        <div className="shrink-0 text-white">
                                          <CheckIcon className="h-6 w-6" />
                                        </div>
                                      )}
                                    </div>
                                  </>
                                )}
                              </RadioGroup.Option>
                            ))}
                        </div>
                      </RadioGroup>
                    ) : (
                      <p>Loading shipping options...</p>
                    )}
                  </dd>
                </div>
                {/* RADIO INPUTS SHIPPING */}
                <div className="flex items-center justify-between">
                  <div className="w-full py-5">
                    <div className="mx-auto w-full max-w-md"></div>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                  <dt className="text-base font-medium text-gray-900">
                    Order total
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                    {(
                      parseFloat(amount.toFixed(2)) +
                      parseFloat(selectedShipping.price)
                    ).toFixed(2)}{" "}
                    AED
                  </dd>
                </div>
              </dl>

              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-block text-center w-full bg-orange-standard border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-black focus:outline-none focus:ring-0  transition ease-in-out duration-300"
                >
                  Checkout
                </button>
              </div>
            </section>
          </form>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.Auth.isAuthenticated,
  items: state.Cart.items,
  amount: state.Cart.amount,
  shipping: state.Shipping.shipping,
});

export default connect(mapStateToProps, {
  get_shipping_options,
})(Checkout);
