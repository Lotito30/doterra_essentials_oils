import Layout from "hocs/layouts/Layout";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import {CheckIcon,} from "@heroicons/react/solid";
import { RadioGroup } from "@headlessui/react";
import { useState } from "react";
import PaymentMethod from "components/cart/Payment";

const Checkout = ({
  isAuthenticated,
  shipping,
  items,
  amount,
}) => {
  const paymentMethods = [
    { id: "cash", label: "Cash on Delivery" },
    { id: "credit", label: "Credit Card (Stripe)" },
  ];
  const [selectedShipping, setSelectedShipping] = useState(
    shipping && shipping.length > 0 ? shipping[0] : null
  );

  const [selectedMethod, setSelectedMethod] = useState(paymentMethods[0].id);

  const handleSelectMethod = (methodId) => {
    setSelectedMethod(methodId);
  };


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
            {/* SEND INFORMATION usar section de cart items*/}

            {/* <form>
            
                </form> */}

            {/* CART TEMS */}
            {/* <section aria-labelledby="cart-heading" className="lg:col-span-7" >
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>

              <ul
                role="list"
                className=""
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
                                  <p>{item.count} item(s)</p>
                                </div>
                              </div>
                            </div>
                          </li>
                        </div>
                      );
                    })}
                </div>
              </ul>
            </section> */}

            

            {/* Order summary */}
            <section
              aria-labelledby="summary-heading"
              className="bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
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
                          shipping.length > 0 &&
                          shipping.map((plan) => (
                            <RadioGroup.Option
                              key={plan.id}
                              value={plan}
                              checked={selectedShipping.id === plan.id}
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

              <div className="mt-6 border-t border-gray-200">
                {items &&
                  items !== null &&
                  items !== undefined &&
                  items.length !== 0 &&
                  items.map((item, index) => (
                    <div className="flex items-center justify-between mt-1">
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
                    {amount.toFixed(2)} AED
                  </dd>
                </div>
                <div className="flex items-center justify-between mt-3 mb-2">
                  <span className="sr-only">Shipping selected</span>
                  <dt className="text-sm text-gray-600">
                    Shipping Selected {selectedShipping.name}
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">
                    {selectedShipping.price} AED
                  </dd>
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
                <div className="border-t border-gray-200 pt-4">
                  <dt className="text-base font-medium text-gray-900">
                    Metodo de pago
                  </dt>
                  <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-md">
                    <h2 className="text-2xl font-bold mb-6">
                      Selecciona tu Método de Pago
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
                        {/* Aquí puedes agregar contenido adicional según el método de pago seleccionado */}
                        {selectedMethod === "debit" ||
                        selectedMethod === "credit" ? (
                          <PaymentMethod />
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
  shipping: state.Shipping.shipping
});

export default connect(mapStateToProps, {
})(Checkout);
