import { useContext, useState } from "react";
import { DashboardContext } from "./DashboardContext";
import { Link } from "react-router-dom";
import moment from "moment";
import { Oval } from "react-loader-spinner";
import { HomeIcon, ShoppingCartIcon } from "@heroicons/react/solid";
const ShowDashboard = ({
  user,
  orders,
  order,
  loading,
  update_user_profile,
  profile,
  coupon,
}) => {
  const { content, setContent } = useContext(DashboardContext);
  const [formData, setFormData] = useState({
    address_line_1: "",
    address_line_2: "",
    city: "",
    state_province_region: "",
    zipcode: "",
    phone: "",
    country_region: "United Arab Emirates",
  });

  const {
    address_line_1,
    address_line_2,
    city,
    state_province_region,
    zipcode,
    phone,
    country_region,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    await update_user_profile(
      address_line_1,
      address_line_2,
      city,
      state_province_region,
      zipcode,
      phone,
      country_region
    );
    setContent("Dashboard");
  };
  function classNames(...classes) {
      return classes.filter(Boolean).join(" ");
    }
  // DASHBOARD CONTENT
  const DashboardContent = () => {
    const statusDelivery = {
      not_processed: 1,
      processed: 2,
      shipping: 3,
      delivered: 4,
      cancelled: 5,
    };

    return (
      <>
        {/* DASHBOARD */}
        {content === "Dashboard" && (
          <div className="flex flex-col gap-4">
            <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-navbar sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Applicant Information
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Personal details and application.
              </p>
              <div className="mt-2">
                <dl>
                  <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">
                      Full name
                    </dt>
                    <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <span className="flex-grow">
                        {user.first_name} {user.last_name}
                      </span>
                    </dd>
                  </div>

                  <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">
                      Email address
                    </dt>
                    <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <span className="flex-grow">{user.email}</span>
                    </dd>
                  </div>

                  <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">Phone</dt>
                    <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <span className="flex-grow">+971 {user.phone}</span>
                    </dd>
                  </div>
                </dl>
              </div>
            </article>
            {/*  DETAILS SHIPPING*/}
            <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-navbar sm:p-6">
              <div className="flex items-center gap-2">
                <HomeIcon className="h-6 w-6" />
                <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                  Shipping details
                </h3>
              </div>

              <div className="mt-2 text-gray-500 flex flex-col gap-1">
                <p className="text-lg">{profile.address_line_1}</p>
                <p>
                  {" "}
                  {profile.zipcode} - {profile.state_province_region} -{" "}
                  {profile.city}
                </p>
                <p className="font-bold text-xs">{profile.country_region}</p>
              </div>

              <Link
                to="/dashboard/profile/edit"
                onClick={() => setContent("Profile")}
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-orange-standard hover:text-black duration-300 transition ease-in-out"
              >
                Update
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </Link>
            </article>
            {/* PURCHASE DETAILS */}
            <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-navbar sm:p-6">
              <div className="flex items-center gap-2">
                <ShoppingCartIcon className="h-6 w-6" />
                <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                  Purchase details
                </h3>
              </div>

              <div className="mt-2 text-gray-500 flex flex-col gap-1">
                <p>
                  Purchases made:{" "}
                  <span className="text-green-500">
                    {orders &&
                      orders !== null &&
                      orders !== undefined &&
                      orders.length}
                  </span>{" "}
                </p>
                <p></p>
                <p className="font-bold"></p>
              </div>

              <Link
                to="/dashboard/payments"
                onClick={() => setContent("Payment History")}
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-orange-standard hover:text-black duration-300 transition ease-in-out"
              >
                Purchase details
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </Link>
            </article>
          </div>
        )}
        {/* PAYMENT HISTORY */}
        {content === "Payment History" &&
          orders &&
          orders !== null &&
          orders !== undefined &&
          orders.map((product, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-100 bg-white p-4 shadow-md mb-3"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="mt-2">
                  <h2 className="sr-only">Products purchased</h2>
                  <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 pt-2">
                    Order - {index + 1}
                  </h1>

                  <div className="text-sm text-right">
                    <div className="">
                      <Link
                        to={`/dashboard/payment/${product.transaction_id}`}
                        onClick={() => setContent("Payment Detail")}
                        className="font-medium text-orange-600 hover:text-black"
                      >
                        View invoice
                        <span aria-hidden="true"> &rarr;</span>
                      </Link>
                    </div>
                  </div>
                  <div className=" border-b border-gray-200 pb-12">
                    <div className="mt-6 sm:col-span-7 sm:mt-0 md:row-end-1">
                      <div>
                        <dl className="flex"></dl>
                      </div>
                      <div className="text-sm mt-2 pb-5 sm:flex sm:justify-between">
                        <h3 className="text-lg font-medium text-gray-900">
                          Transaction ID: {product.transaction_id.toUpperCase()}
                        </h3>
                        <dl className="flex"></dl>
                      </div>
                      {/* <p className="text-gray-500 mt-3">
                      Shipping Selected: {order.shipping_name}
                    </p>   */}
                    </div>
                    <div className="sm:col-span-12 md:col-span-7">
                      <dl className="grid grid-cols-1 gap-y-8 border-b py-8 border-gray-200 sm:grid-cols-2 sm:gap-x-6 sm:py-6 md:py-10">
                        <div>
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
                        </div>
                      </dl>
                      <p className="font-semi text-gray-900 mt-6 md:mt-10">
                        <span className="font-bold">Status:</span>{" "}
                        {product.status}{" "}
                        {/* <span className="font-bold">
                          Purchased on:{" "}
                        </span>
                        {moment(product.date_issued).format('MM/DD/YY - H:mm')} */}
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
                </div>
              </div>
            </div>
          ))}
        {/* PAYMENT ORDER DETAIL */}
        {content === "Payment Detail" &&
          order &&
          order !== undefined &&
          order !== null && (
            <div
              key={order.id}
              className="rounded-lg border border-gray-100 bg-white p-4 shadow-navbar"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="mt-2">
                  <h2 className="sr-only">order purchased</h2>
                  <div className="space-y-2">
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      Order details
                    </h1>

                    <div className="text-sm  mt-2 pb-5 sm:flex sm:justify-between">
                      <dl className="flex">
                        <dt className="text-gray-500">Order number&nbsp;</dt>
                        <dd className="font-medium text-gray-900 uppercase">
                          {order.transaction_id}
                        </dd>
                        <dt>
                          <span className="sr-only">Date</span>
                          <span
                            className="text-gray-400 mx-2"
                            aria-hidden="true"
                          >
                            &middot;
                          </span>
                        </dt>
                        <dd className="font-medium text-gray-900">
                          <time>
                            {moment(order.date_issued).format(
                              "MM/DD/YY - H:mm"
                            )}
                            h.
                          </time>
                        </dd>
                      </dl>
                    </div>
                    <div className="grid grid-cols-1 text-sm sm:grid-rows-1 sm:grid-cols-12 sm:gap-x-6 md:gap-x-8 lg:gap-x-8">
                      {/* <div className="sm:col-span-4 md:col-span-5 md:row-end-2 md:row-span-2">
                        <div>
                          {order.order_items.map((item, index) => {
                            return (
                              <ul key={index}>
                                <li>
                                  {item.name} x {item.count}
                                </li>
                              </ul>
                            );
                          })}
                        </div>
                      </div> */}
                      <div className="mt-6 sm:col-span-full sm:mt-0 md:row-end-1">
                        <div>
                          <dl className="flex"></dl>
                        </div>
                        <div className="text-sm mt-2 pb-5 sm:flex sm:justify-between">
                          <h3 className="text-lg font-medium text-gray-900">
                            Status: {order.status}
                          </h3>
                          <dl className="flex"></dl>
                        </div>
                        {/* <p className="text-gray-500 mt-3">
                                Shipping Selected: {order_detail()}
                              </p>  */}
                      </div>
                      {/* STATUS */}
                      <div className="sm:col-span-12 md:col-span-full ">
                        {/* <p className="font-semi text-gray-900 mt-6 md:mt-10">
                          <span className="font-bold">Status:</span>{" "}
                          {order.status}{" "}
                        </p> */}
                        <div className="mt-6">
                          <div className="bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-2 bg-orange-standard rounded-full"
                              style={{
                                width: `calc((${
                                  statusDelivery[order.status]
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
                                statusDelivery[order.status] > 0
                                  ? "text-orange-standard"
                                  : "",
                                "text-center"
                              )}
                            >
                              Processing
                            </div>
                            <div
                              className={classNames(
                                statusDelivery[order.status] > 1
                                  ? "text-orange-standard"
                                  : "",
                                "text-center"
                              )}
                            >
                              Shipped
                            </div>
                            <div
                              className={classNames(
                                statusDelivery[order.status] > 2
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
                    {/* Billing agregarlo en la view invoice de cada orden*/}
                    <div className="mt-6 pb-6">
                      <h2 className="sr-only">Billing Summary</h2>

                      <div className="bg-gray-50 rounded-lg py-6 px-6 lg:px-0 lg:py-8 lg:grid lg:grid-cols-12 lg:gap-x-8 mt-8">
                        <dl className="grid grid-cols-1 gap-6 text-sm sm:grid-cols-2 md:gap-x-8 lg:pl-8 lg:col-span-5">
                          <div>
                            <dt className="font-medium text-gray-900">
                              Billing address
                            </dt>
                            <dd className="mt-3 text-gray-500">
                              <span className="block">
                                {order.address_line_1}
                              </span>
                              <span className="block">
                                {order.state_province_region}
                              </span>
                              <span className="block">
                                {order.city}, CP.
                                {order.postal_zip_code}
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
                                  xmlns="http:ww.w3.org/2000/svg"
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
                                <p className="text-gray-600">Expires 02 / 24</p>
                              </div>
                            </dd>
                          </div>
                        </dl>

                        <dl className="mt-8 divide-y text-sm lg:mt-0 lg:pr-8 lg:col-span-7">
                          <div className="pb-4">
                            {order.order_items &&
                              order.order_items !== null &&
                              order.order_items !== undefined &&
                              order.order_items.length !== 0 &&
                              order.order_items.map((item, index) => (
                                <div
                                  key={index}
                                  className="flex items-center justify-between mt-1"
                                >
                                  <span className="sr-only">
                                    map de items con su nombre, valor unitario y
                                    precio multiplicado por la cantidad de
                                    productos comprados
                                  </span>
                                  <dt className="text-sm text-gray-600">
                                    {item.name} x {item.count}
                                  </dt>

                                  <dd className="text-sm font-medium text-gray-900">
                                    {(
                                      parseFloat(item.price) * item.count
                                    ).toFixed(2)}{" "}
                                    AED
                                  </dd>
                                </div>
                              ))}
                          </div>
                          <div className="py-4 flex items-center justify-between">
                            <dt className="text-gray-600">Subtotal</dt>
                            <dd className="font-medium text-gray-900">
                              {parseFloat(
                                order.amount - order.shipping_price
                              ).toFixed(2)}{" "}
                              AED
                            </dd>
                          </div>
                          <div className="py-4 flex items-center justify-between">
                            <dt className="text-gray-600">Shipping</dt>
                            <dd className="font-medium text-gray-900">
                              {parseFloat(order.shipping_price).toFixed(2)} AED
                            </dd>
                          </div>
                          {/* <div className="py-4 flex items-center justify-between">
                            <dt className="text-gray-600">Discount used <span className="ml-1 px-2 py-1 bg-green-500 rounded-lg text-white">{coupon.name}</span></dt>
                            <dd className="font-medium text-gray-900">
                              - {parseFloat(coupon.discount_price).toFixed(2)} AED
                            </dd>
                          </div> */}
                          {/* <div className="py-4 flex items-center justify-between">
                                  <dt className="text-gray-600">Tax</dt>
                                  <dd className="font-medium text-gray-900">
                                    $6.16
                                  </dd>
                                </div>  */}
                          <div className="pt-4 flex items-center justify-between">
                            <dt className="font-medium text-gray-900">
                              Order total
                            </dt>
                            <dd className="font-medium text-gray-900">
                              {parseFloat(order.amount).toFixed(2)} AED
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        {content === "Profile" && (
          <>
            <div className="p-6">
              <div className="px-4 sm:px-6 ">
                <div className="w-full max-w-xl mx-auto">
                  <div className="w-full px-6">
                    <div className="">
                      <div className="w-full">
                        <h2 className="text-3xl font-extrabold text-neutral-600">
                          Shipping Details
                        </h2>
                      </div>
                    </div>
                    <div>
                      <div className="mt-7">
                        <form onSubmit={(e) => onSubmit(e)}>
                          <div>
                            <label
                              for="address_line_1"
                              className="block text-sm font-medium text-neutral-600"
                            >
                              {" "}
                              Address 1{" "}
                            </label>
                            <input
                              type="text"
                              name="address_line_1"
                              value={address_line_1}
                              onChange={(e) => onChange(e)}
                              required
                              className="block placeholder:text-black w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                              placeholder={profile.address_line_1}
                            />
                          </div>
                          <div>
                            <label
                              for="address_line_2"
                              className="block text-sm font-medium text-neutral-600"
                            >
                              {" "}
                              Address 2{" "}
                            </label>
                            <input
                              type="text"
                              name="address_line_2"
                              value={address_line_2}
                              onChange={(e) => onChange(e)}
                              className="block placeholder:text-black w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                              placeholder={profile.address_line_2}
                            />
                          </div>
                          <div>
                            <label
                              for="city"
                              className="block text-sm font-medium text-neutral-600"
                            >
                              {" "}
                              City{" "}
                            </label>
                            <input
                              type="text"
                              name="city"
                              value={city}
                              onChange={(e) => onChange(e)}
                              required
                              className="block placeholder:text-black w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                              placeholder={profile.city}
                            />
                          </div>
                          <div>
                            <label
                              for="state_province_region"
                              className="block text-sm font-medium text-neutral-600"
                            >
                              {" "}
                              State/Province{" "}
                            </label>
                            <input
                              type="text"
                              name="state_province_region"
                              value={state_province_region}
                              onChange={(e) => onChange(e)}
                              required
                              className="block placeholder:text-black w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                              placeholder={profile.state_province_region}
                            />
                          </div>
                          <div>
                            <label
                              for="zipcode"
                              className="block text-sm font-medium text-neutral-600"
                            >
                              {" "}
                              Zipcode{" "}
                            </label>
                            <input
                              type="number"
                              name="zipcode"
                              value={zipcode}
                              onChange={(e) => onChange(e)}
                              required
                              className="block placeholder:text-black w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                              placeholder={profile.zipcode}
                            />
                          </div>
                          <div>
                            <label
                              for="phone"
                              className="block text-sm font-medium text-neutral-600"
                            >
                              {" "}
                              Phone{" "}
                            </label>
                            <input
                              type="text"
                              name="phone"
                              value={phone}
                              onChange={(e) => onChange(e)}
                              required
                              className="block placeholder:text-black w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                              placeholder={profile.phone}
                            />
                          </div>
                          <p className="text-xs text-end">Don't enter +971 </p>
                          <div>
                            <label
                              for="country_region"
                              className="block text-sm font-medium text-neutral-600"
                            >
                              {" "}
                              Country{" "}
                            </label>
                            <input
                              type="text"
                              name="country_region"
                              value={country_region}
                              required
                              disabled
                              className="block placeholder:text-black w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                              placeholder={profile.country_region}
                            />
                          </div>
                          <div className="pt-3">
                            {loading ? (
                              <button className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-orange-standard rounded-xl hover:bg-orange-standard focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-standard">
                                <Oval
                                  visible={true}
                                  height="20"
                                  width="20"
                                  color="#FFF"
                                  ariaLabel="oval-loading"
                                  wrapperStyle={{}}
                                  wrapperclassName=""
                                />{" "}
                              </button>
                            ) : (
                              <button
                                type="submit"
                                className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-300 ease-in-out transform bg-orange-standard rounded-xl hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-standard"
                              >
                                Save
                              </button>
                            )}
                          </div>
                        </form>
                      </div>
                    </div>
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
