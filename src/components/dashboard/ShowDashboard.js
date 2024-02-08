import { useContext } from "react";
import { DashboardContext } from "./DashboardContext";
import { Link } from "react-router-dom";
import moment from "moment";

const ShowDashboard = ({ user, orders, order, get_order_detail }) => {
  const { content } = useContext(DashboardContext);

  //   DASHBOARD CONTENT
  const DashboardContent = () => {

    const statusDelivery = {
      not_processed: 1,
      processed: 2,
      shipping: 3,
      delivered: 4,
      cancelled: 5,
    };

    function classNames(...classes) {
      return classes.filter(Boolean).join(" ");
    }
    return (
      <>
        {/* DASHBOARD */}
        {content === "Dashboard" && (
          <>
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Applicant Information
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Personal details and application.
              </p>
            </div>
            <div className="mt-5 border-t border-gray-200">
              <dl className="divide-y divide-gray-200">
                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">
                    Full name
                  </dt>
                  <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <span className="flex-grow">
                      {user.first_name} {user.last_name}
                    </span>
                  </dd>
                </div>

                <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium text-gray-500">
                    Email address
                  </dt>
                  <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <span className="flex-grow">{user.email}</span>
                  </dd>
                </div>
              </dl>
            </div>
          </>
        )}
        {/* PAYMENT HISTORY */}
        {content === "Payment_History" && (
          <>
            <div className="bg-white">
              <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Orders Details
                </h1>
                <div className="text-sm border-b border-gray-200 mt-2 pb-5 sm:flex sm:justify-between">
                  {/* <dl className="flex">
                    <dt className="text-gray-500">Order number&nbsp;</dt>
                    <dd className="font-medium text-gray-900">W086438695</dd>
                    <dt>
                      <span className="sr-only">Date</span>
                      <span className="text-gray-400 mx-2" aria-hidden="true">
                        &middot;
                      </span>
                    </dt>
                    <dd className="font-medium text-gray-900">
                      <time dateTime="2021-03-22">March 22, 2021</time>
                    </dd>
                  </dl> */}
                  {/* <div className="mt-4 sm:mt-0">
                    <a
                      href="#"
                      className="font-medium text-orange-600 hover:text-indigo-500"
                    >
                      View invoice<span aria-hidden="true"> &rarr;</span>
                    </a>
                  </div> */}
                </div>

                <div className="mt-8">
                  <h2 className="sr-only">Products purchased</h2>

                  <div className="space-y-10">
                    {orders &&
                      orders !== null &&
                      orders !== undefined &&
                      orders.map((product, index) => {
                        return (
                          <>
                            <div
                              key={index}
                              className="grid grid-cols-1 text-sm sm:grid-rows-1 sm:grid-cols-12 sm:gap-x-6 md:gap-x-8 lg:gap-x-8 border-b-2 pb-12"
                            >
                              <div className="sm:col-span-4 md:col-span-5 md:row-end-2 md:row-span-2">
                                <div className="aspect-w-1 aspect-h-1 bg-gray-50 rounded-lg overflow-hidden">
                                  <img
                                    src=""
                                    alt="Product"
                                    className="object-center object-cover"
                                  />
                                </div>
                              </div>
                              <div className="mt-6 sm:col-span-7 sm:mt-0 md:row-end-1">
                                <div className="text-sm mt-2 pb-5 sm:flex sm:justify-between">
                                  <h3 className="text-lg font-medium text-gray-900">
                                    Transaction ID: {product.transaction_id.toUpperCase()}
                                    {/* NAME PRODUCT */}
                                  </h3>
                                  <dl className="flex"></dl>
                                  <div className="mt-4 sm:mt-0">
                                    <Link
                                      href="#"
                                      className="font-medium text-black hover:text-orange-standard ease-in-out duration-300 transition"
                                    >
                                      View invoice
                                      <span aria-hidden="true"> &rarr;</span>
                                    </Link>
                                  </div>
                                </div>
                                {/* <p className="text-gray-500 mt-3">
                                Shipping Selected: {order_detail()}
                              </p>  */}
                              </div>
                              <div className="sm:col-span-12 md:col-span-7">
                                <dl className="grid grid-cols-1 gap-y-8 border-b py-8 border-gray-200 sm:grid-cols-2 sm:gap-x-6 sm:py-6 md:py-10">
                                  {/* <div>
                                  <dt className="font-medium text-gray-900">
                                    Delivery address
                                  </dt>
                                  <dd className="mt-3 text-gray-500">
                                    <span className="block">
                                      {product.address_line_1}
                                    </span>
                                    <span className="block">
                                      {product.address_line_2}
                                    </span>
                                  </dd>
                                </div> */}
                                </dl>
                                <p className="font-semi text-gray-900 mt-6 md:mt-10">
                                  <span className="font-bold">Status:</span>{" "}
                                  {product.status}{" "}
                                  <span className="font-bold">
                                    Purchased on:{" "}
                                  </span>
                                  {moment(product.date_issued).fromNow()}
                                </p>
                                <div className="mt-6">
                                  <div className="bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                      className="h-2 bg-orange-standard rounded-full"
                                      style={{
                                        width: `calc((${
                                          statusDelivery[product.status]
                                        } * 2 + 1) / 8 * 100%)`,
                                      }}
                                    />
                                  </div>
                                  <div className="hidden sm:grid grid-cols-4 font-medium text-gray-600 mt-6">
                                    <div className="text-orange-standard">
                                      Order placed
                                    </div>
                                    <div
                                      className={classNames(
                                        statusDelivery[product.status] > 0
                                          ? "text-orange-standard"
                                          : "",
                                        "text-center"
                                      )}
                                    >
                                      Processing
                                    </div>
                                    <div
                                      className={classNames(
                                        statusDelivery[product.status] > 1
                                          ? "text-orange-standard"
                                          : "",
                                        "text-center"
                                      )}
                                    >
                                      Shipped
                                    </div>
                                    <div
                                      className={classNames(
                                        statusDelivery[product.status] > 2
                                          ? "text-orange-standard"
                                          : "",
                                        "text-right"
                                      )}
                                    >
                                      Delivered
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Billing agregarlo en la view invoice de cada producto*/}
                            {/* <div className="mt-6 pb-6 border-b-2 border-gray-200">
                              <h2 className="sr-only">Billing Summary</h2>

                              <div className="bg-gray-50 rounded-lg py-6 px-6 lg:px-0 lg:py-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
                                <dl className="grid grid-cols-1 gap-6 text-sm sm:grid-cols-2 md:gap-x-8 lg:pl-8 lg:col-span-5">
                                  <div>
                                    <dt className="font-medium text-gray-900">
                                      Billing address
                                    </dt>
                                    <dd className="mt-3 text-gray-500">
                                      <span className="block">
                                        {product.address_line_1}
                                      </span>
                                      <span className="block">
                                        {product.state_province_region}
                                      </span>
                                      <span className="block">
                                        {product.city}, CP.
                                        {product.postal_zip_code}
                                      </span>
                                    </dd>
                                  </div>
                                  <div>
                                    <dt className="font-medium text-gray-900">
                                      Payment information
                                    </dt>
                                    <dd className="mt-3 flex">
                                      <div>
                                        <svg
                                          aria-hidden="true"
                                          width={36}
                                          height={24}
                                          viewBox="0 0 36 24"
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-6 w-auto"
                                        >
                                          <rect
                                            width={36}
                                            height={24}
                                            rx={4}
                                            fill="#224DBA"
                                          />
                                          <path
                                            d="M10.925 15.673H8.874l-1.538-6c-.073-.276-.228-.52-.456-.635A6.575 6.575 0 005 8.403v-.231h3.304c.456 0 .798.347.855.75l.798 4.328 2.05-5.078h1.994l-3.076 7.5zm4.216 0h-1.937L14.8 8.172h1.937l-1.595 7.5zm4.101-5.422c.057-.404.399-.635.798-.635a3.54 3.54 0 011.88.346l.342-1.615A4.808 4.808 0 0020.496 8c-1.88 0-3.248 1.039-3.248 2.481 0 1.097.969 1.673 1.653 2.02.74.346 1.025.577.968.923 0 .519-.57.75-1.139.75a4.795 4.795 0 01-1.994-.462l-.342 1.616a5.48 5.48 0 002.108.404c2.108.057 3.418-.981 3.418-2.539 0-1.962-2.678-2.077-2.678-2.942zm9.457 5.422L27.16 8.172h-1.652a.858.858 0 00-.798.577l-2.848 6.924h1.994l.398-1.096h2.45l.228 1.096h1.766zm-2.905-5.482l.57 2.827h-1.596l1.026-2.827z"
                                            fill="#fff"
                                          />
                                        </svg>
                                        <p className="sr-only">Visa</p>
                                      </div>
                                      <div className="ml-4">
                                        <p className="text-gray-900">
                                          Ending with 4242
                                        </p>
                                        <p className="text-gray-600">
                                          Expires 02 / 24
                                        </p>
                                      </div>
                                    </dd>
                                  </div>
                                </dl>

                                <dl className="mt-8 divide-y divide-gray-200 text-sm lg:mt-0 lg:pr-8 lg:col-span-7">
                                  <div className="pb-4 flex items-center justify-between">
                                    <dt className="text-gray-600">Subtotal</dt>
                                    <dd className="font-medium text-gray-900">
                                      {parseFloat(
                                        product.amount - product.shipping_price
                                      ).toFixed(2)}{" "}
                                      AED
                                    </dd>
                                  </div>
                                  <div className="py-4 flex items-center justify-between">
                                    <dt className="text-gray-600">Shipping</dt>
                                    <dd className="font-medium text-gray-900">
                                      {parseFloat(
                                        product.shipping_price
                                      ).toFixed(2)}{" "}
                                      AED
                                    </dd>
                                  </div>
                                  <div className="py-4 flex items-center justify-between">
                                  <dt className="text-gray-600">Tax</dt>
                                  <dd className="font-medium text-gray-900">
                                    $6.16
                                  </dd>
                                </div> 
                                  <div className="pt-4 flex items-center justify-between">
                                    <dt className="font-medium text-gray-900">
                                      Order total
                                    </dt>
                                    <dd className="font-medium text-gray-900">
                                      {parseFloat(product.amount).toFixed(2)}{" "}
                                      AED
                                    </dd>
                                  </div>
                                </dl>
                              </div>
                            </div> */}
                          </>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  };

  return <>{DashboardContent()}</>;
};

export default ShowDashboard;
