import { useContext, useState } from "react";
import { DashboardContext } from "./DashboardContext";
import { Link } from "react-router-dom";
import moment from "moment";
import { Oval } from "react-loader-spinner";
import {
  HomeIcon,
  ShoppingCartIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
const ShowDashboard = ({
  user,
  orders,
  order,
  loading,
  update_user_profile,
  profile,
  coupon,
  products,
  categories,
  create_product,
}) => {
  const districtOptionCity = {
    AbuDhabi: {
      distrito1: "Abu al Abyad",
      distrito2: "Isla Al-Aryam",
      distrito3: "Al Bandar",
      distrito4: "Al-Bahiyah",
      distrito5: "Isla Al Lulu",
      distrito6: "Isla Al Maryah",
      distrito7: "Al Rahah",
    },
    Dubai: {
      distrito1: "Dubai Marina",
      distrito2: "Deira",
      distrito3: "Bur Dubai",
      distrito4: "Jumeirah",
      distrito5: "Business Bay",
      distrito6: "Palm Jumeirah",
      distrito7: "Al Barsha",
    },
    Sharjah: {
      distrito1: "Al Qasimia",
      distrito2: "Al Majaz",
      distrito3: "Al Nahda",
      distrito4: "Al Taawun",
      distrito5: "Al Khan",
      distrito6: "Al Qasba",
      distrito7: "Al Rolla",
    },
    Ajman: {
      distrito1: "Ajman Downtown",
      distrito2: "Al Jurf",
      distrito3: "Al Nuaimiya",
      distrito4: "Al Rashidiya",
      distrito5: "Al Mowaihat",
      distrito6: "Al Zahra",
      distrito7: "Masfout",
    },
    UmmAlQuwain: {
      distrito1: "Umm Al Quwain City",
      distrito2: "Al Salama",
      distrito3: "Al Rafaah",
      distrito4: "Al Rashidiya",
      distrito5: "Al Hamra",
      distrito6: "Mistiffah",
      distrito7: "Falaj Al Mualla",
    },
    RasAlKhaimah: {
      distrito1: "Al Nakheel",
      distrito2: "Al Dhait",
      distrito3: "Al Rams",
      distrito4: "Al Seer",
      distrito5: "Al Qusaidat",
      distrito6: "Al Mamourah",
      distrito7: "Al Jazeera Al Hamra",
    },
    Fujairah: {
      distrito1: "Fujairah City",
      distrito2: "Dibba Al Fujairah",
      distrito3: "Al Bithnah",
      distrito4: "Al Taween",
      distrito5: "Masafi",
      distrito6: "Khor Fakkan",
      distrito7: "Kalba",
    },
  };
  const [popus, setPopus] = useState("");
  const { content, setContent } = useContext(DashboardContext);
  const [formData, setFormData] = useState({
    street: "",
    building_villa: "",
    department: "",
    city: "",
    district: "",
    zipcode: "",
    phone: user?.phone || "",
    country_region: "United Arab Emirates",
    product: "",
    photo: "",
    description: "",
    price: "",
    compare_price: "",
    category: "",
    quantity: "",
  });

  const {
    street,
    building_villa,
    department,
    city,
    district,
    zipcode,
    phone,
    country_region,
    product,
    photo,
    description,
    price,
    compare_price,
    category,
    quantity,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await update_user_profile(
      street,
      building_villa,
      department,
      city,
      district,
      zipcode,
      phone,
      country_region
    );
    setContent("Dashboard");
  };

  const handleSubmitProduct = async (e) => {
    e.preventDefault();
    await create_product(
      product,
      photo,
      description,
      price,
      compare_price,
      category,
      quantity
    );
    setPopus('')
  };
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  // DASHBOARD CONTEN T
  const DashboardContent = () => {
    const statusDelivery = {
      processed: 1,
      shipping: 2,
      delivered: 3,
      cancelled: 4,
    };
    
    return (
      <>
        {/* DASHBOARD */}
        {content === "Dashboard" && (
          <div className="flex flex-col gap-4">
            <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-navbar sm:p-6">
              <div className="flex items-center gap-2">
                <UserCircleIcon className="h-6 w-6" />
                <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                  Personal details
                </h3>
              </div>
              <div className="mt-2">
                <dl>
                  <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">
                      Full name
                    </dt>
                    <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <span className="flex-grow capitalize">
                        {user?.first_name} {user?.last_name}
                      </span>
                    </dd>
                  </div>

                  <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">
                      Email address
                    </dt>
                    <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <span className="flex-grow">{user?.email}</span>
                    </dd>
                  </div>

                  <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">Phone</dt>
                    <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      <span className="flex-grow">{user?.phone}</span>
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

              {profile.street === "" ||
              profile.city === "" ||
              profile.district === "" ? (
                <>
                  <h3 className="my-2">
                    You don't have a shipping address added.{" "}
                  </h3>
                  <p>Please update your shipping address. </p>
                </>
              ) : (
                <div className="mt-2 text-gray-500 flex flex-col gap-1">
                  <p className="text-lg">
                    {profile.street} - {profile?.building_villa}
                  </p>
                  <p>
                    {" "}
                    CP{profile?.zipcode} - {profile?.district} - {profile?.city}{" "}
                    - {profile?.phone}
                  </p>
                  <p className="font-bold text-xs mt-1">
                    {profile.country_region}
                  </p>
                </div>
              )}
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
                  Purchases made: <span>{orders?.length}</span>{" "}
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
          orders?.map((order, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-100 bg-white p-4 shadow-md mb-3 flex justify-between"
            >
              <div className="max-w-7xl px-4 sm:px-6 ">
                <div className="">
                  <h2 className="sr-only">orders purchased</h2>
                  <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 pt-2 ">
                    <time>{moment(order.date_issued).format("MM/DD/YY")}</time>
                  </h1>
                  <div>
                    <p className="text-green-500 capitalize mt-2 font-semibold text-lg">
                      {order.status}
                    </p>
                    <div className="py-2">
                      <dl className="">
                        <div>
                          <dt className="font-medium text-gray-900">
                            Delivery address
                          </dt>
                          <dd className="text-gray-500">
                            <span className="block">{order.street}</span>
                            <span className="block">
                              {order.building_villa}
                            </span>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <section className="flex py-2 flex-col items-center h-auto justify-between">
                {order?.coupon_price > 0 ? (
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#0F0"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-7 h-7"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                      />
                    </svg>
                  </div>
                ) : (
                  ""
                )}
                <p></p>
                <div className="flex gap-2">
                  <Link
                    to={`/dashboard/payment/${order.transaction_id}`}
                    onClick={() => setContent("Purchase Details")}
                    className="font-medium text-orange-600 hover:text-orange-400 text-sm bg-gray-100 p-2 rounded-md"
                  >
                    View Order
                  </Link>
                </div>
              </section>
            </div>
          ))}
        {/* PAYMENT ORDER DETAIL */}
        {content === "Purchase Details" && order && (
          <div
            key={order?.id}
            className="rounded-lg border border-gray-100 bg-white p-4 shadow-navbar"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col">
              <div className="mt-2">
                <h2 className="sr-only">order purchased</h2>
                <div className="space-y-2">
                  <div className="text-sm  mt-2 pb-5 sm:flex sm:justify-between">
                    <dl className="flex">
                      <dt className="text-gray-500">Order number&nbsp;</dt>
                      <dd className="font-medium text-gray-900 uppercase">
                        {order.transaction_id}
                      </dd>
                      <dt>
                        <span className="sr-only">Date</span>
                        <span className="text-gray-400 mx-2" aria-hidden="true">
                          &middot;
                        </span>
                      </dt>
                      <dd className="font-medium text-gray-900">
                        <time>
                          {moment(order.date_issued).format("MM/DD/YY - H:mm")}
                          h.
                        </time>
                      </dd>
                    </dl>
                  </div>
                  <div className="grid grid-cols-1 text-sm sm:grid-rows-1 sm:grid-cols-12 sm:gap-x-6 md:gap-x-8 lg:gap-x-8">
                    <div className="mt-6 sm:col-span-full sm:mt-0 md:row-end-1">
                      <div className="flex flex-col"></div>
                      <div className="text-sm mt-2 pb-5 sm:flex sm:justify-between">
                        <h3 className="text-lg font-medium text-gray-900">
                          Status:{" "}
                          <span className="text-green-500 capitalize">
                            {order.status}
                          </span>
                        </h3>
                        <dl className="flex"></dl>
                      </div>
                    </div>
                    {/* STATUS */}
                    <div className="sm:col-span-12 md:col-span-full ">
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
                            <span className="block">{order.street}</span>
                            <span className="block">{order.district}</span>
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
                              <p className="text-gray-900">Ending with 4242</p>
                              <p className="text-gray-600">Expires 02 / 24</p>
                            </div>
                          </dd>
                        </div>
                      </dl>

                      <dl className="mt-8 text-sm lg:mt-0 lg:pr-8 lg:col-span-7">
                        <div className="pb-1">
                          {order.order_items?.length !== 0 &&
                            order.order_items?.map((item, index) => (
                              <div
                                key={index}
                                className="flex items-center justify-between"
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
                                  $
                                </dd>
                              </div>
                            ))}
                        </div>
                        <div className="py-1 flex items-center justify-between">
                          <dt className="text-gray-600">Shipping</dt>
                          <dd className="font-medium text-gray-900">
                            {parseFloat(order.shipping_price).toFixed(2)} $
                          </dd>
                        </div>
                        {order.coupon_price > 0 ? (
                          <div className="py-1 flex items-center justify-between">
                            <dt className="text-gray-600">Coupon</dt>
                            <dd className="font-medium text-green-500">
                              - {parseFloat(order.coupon_price).toFixed(2)} $
                            </dd>
                          </div>
                        ) : (
                          ""
                        )}
                        <div className="py-1 flex items-center justify-between">
                          <dt className="text-gray-600">Subtotal</dt>
                          <dd className="font-medium text-gray-900">
                            {parseFloat(
                              order.amount - order.shipping_price
                            ).toFixed(2)}{" "}
                            $
                          </dd>
                        </div>

                        <div className="pt-3 flex items-center justify-between">
                          <dt className="font-semibold text-gray-900">
                            Order total
                          </dt>
                          <dd className="font-semibold text-gray-900">
                            {parseFloat(order.amount).toFixed(2)} $
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              {/* RECORRER TODOS LOS ID DE LOS PRODUCTOS Y GUARDARLOS EN EL CART Y REDIRECCIONAR AL CART */}
              <Link
                to={`/product/${order.id}`}
                onClick={() => setContent("Dashboard")}
                className="font-medium text-orange-600 hover:text-orange-400 text-sm bg-gray-100 p-2 rounded-md text-center"
              >
                Reorder
              </Link>
            </div>
          </div>
        )}
        {/* PROFILE EDIT */}
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
                              for="city"
                              className="block text-sm font-medium text-neutral-600"
                            >
                              {" "}
                              City{" "}
                            </label>
                            <select
                              type="text"
                              name="city"
                              value={city}
                              onChange={(e) => onChange(e)}
                              required
                              className="block placeholder:text-black w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                            >
                              <option value="">Choose an emirate</option>
                              <option value="Dubai">Dubai</option>
                              <option value="AbuDhabi">Abu Dhabi</option>
                              <option value="Sharjah">Sharjah</option>
                              <option value="Ajman">Ajman</option>
                              <option value="RasAlKhaimah">
                                Ras al-Khaimah
                              </option>
                              <option value="Fujairah">Fujairah</option>
                              <option value="UmmAlQuwain">Umm al-Quwain</option>
                            </select>
                          </div>

                          <div>
                            <label
                              for="district"
                              className="block text-sm font-medium text-neutral-600"
                            >
                              {" "}
                              District{" "}
                            </label>
                            <select
                              type="text"
                              name="district"
                              value={district}
                              onChange={(e) => onChange(e)}
                              required
                              className="block placeholder:text-black w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                            >
                              <option value="">Choose an district</option>
                              {districtOptionCity[formData.city] &&
                                Object.values(
                                  districtOptionCity[formData.city]
                                ).map((dist, index) => (
                                  <option key={index} value={dist}>
                                    {dist}
                                  </option>
                                ))}
                            </select>
                          </div>
                          <div>
                            <label
                              for="street"
                              className="block text-sm font-medium text-neutral-600"
                            >
                              {" "}
                              Street{" "}
                            </label>
                            <input
                              type="text"
                              name="street"
                              value={street}
                              onChange={(e) => onChange(e)}
                              required
                              className="block placeholder:text-black w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                            />
                          </div>
                          <div>
                            <label
                              for="building_villa"
                              className="block text-sm font-medium text-neutral-600"
                            >
                              {" "}
                              Building/Villa Name{" "}
                            </label>
                            <input
                              type="text"
                              name="building_villa"
                              value={building_villa}
                              onChange={(e) => onChange(e)}
                              className="block placeholder:text-black w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                            />
                          </div>
                          <div>
                            <label
                              for="building_villa"
                              className="block text-sm font-medium text-neutral-600"
                            >
                              {" "}
                              Department{" "}
                            </label>
                            <input
                              type="text"
                              name="department"
                              value={department}
                              onChange={(e) => onChange(e)}
                              className="block placeholder:text-black w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
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
                              onChange={(e) => onChange(e)}
                              value={phone}
                              required
                              className="block placeholder:text-black w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                            />
                          </div>
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
        {/* SALES */}
        {content === "Sales" && (
          <div className="border border-gray-200">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="">
                  <tr>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Transaction ID
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Date
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Status
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Client
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Amount
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {orders?.map((order, index) => (
                    <>
                      <tr className="text-center">
                        <td className="uppercase whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          {order.transaction_id}
                        </td>

                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          <time>
                            {moment(order.date_issued).format(
                              "MM/DD/YY - hh:mm"
                            )}
                            H.
                          </time>
                        </td>

                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 capitalize">
                          {order.status}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 capitalize">
                          {/* NOMBRE DEL CLIENTE */}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          {order.amount} $
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          <button
                            className="p-2 bg-orange-standard ml-1 text-white rounded-sm hover:bg-orange-400"
                            onClick={""}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {/* PRODUCTS */}
        {content === "Products" && (
          <>
            <button
              className="p-2 bg-orange-standard mb-1 rounded-sm text-white hover:bg-orange-400"
              onClick={() => setPopus("add")}
            >
              Create product
            </button>
            <div className="border border-gray-200">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                  <thead className="capitalize">
                    <tr>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        ID
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        name
                      </th>
                      {/* <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Category
                    </th> */}
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        quantity
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        sold
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        price
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        action
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    {products?.map((product, index) => (
                      <>
                        <tr className="text-center" key={index}>
                          <td className="uppercase whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            {product.id}
                          </td>

                          <td className="text-start whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            {product.name}
                          </td>

                          {/* <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          {product.category}
                        </td> */}

                          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            {product.quantity}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            {product.sold}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            {product.price} $
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            <button
                              className="p-2 bg-blue-500 ml-1 text-white rounded-sm hover:bg-blue-400"
                              onClick={() => setPopus("edit")}
                            >
                              Edit
                            </button>
                            <button
                              className="p-2 bg-red-500 ml-1 text-white rounded-sm hover:bg-red-400"
                              onClick={() => setPopus("")}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
        {/* EDIT PRODUCT */}
        {popus === "edit" && (
          <div className="rounded-lg bg-white p-8 shadow-2xl absolute top-1/2 left-1/2 z-50 transform -translate-x-1/3 -translate-y-1/2">
            <h2 className="text-lg font-bold">Edit product</h2>

            <form
              className="mt-2 text-sm text-gray-500"
              onSubmit={(e) => handleSubmitProduct(e)}
            >
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label for="product" class="block mb-2">
                    Product:
                  </label>
                  <input
                    type="text"
                    id="product"
                    name="product"
                    class="w-full border border-gray-300 rounded-md px-4 py-2"
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>

                <div>
                  <label for="photo" class="block mb-2">
                    Photo:
                  </label>
                  <input
                    type="file"
                    id="photo"
                    name="photo"
                    class="w-full border border-gray-300 rounded-md px-4 py-2"
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>

                <div>
                  <label for="description" class="block mb-2">
                    Description:
                  </label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    class="w-full border border-gray-300 rounded-md px-4 py-2"
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>

                <div>
                  <label for="price" class="block mb-2">
                    Price:
                  </label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    class="w-full border border-gray-300 rounded-md px-4 py-2"
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>

                <div>
                  <label for="compare_price" class="block mb-2">
                    Compare Price:
                  </label>
                  <input
                    type="text"
                    id="compare_price"
                    name="compare_price"
                    class="w-full border border-gray-300 rounded-md px-4 py-2"
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>

                <div>
                  <label for="category" class="block mb-2">
                    Category:
                  </label>
                  <select
                    id="category"
                    name="category"
                    class="w-full border border-gray-300 rounded-md px-4 py-2"
                    onChange={(e) => onChange(e)}
                    required
                  >
                    <option>Select a Category</option>
                  </select>
                </div>

                <div>
                  <label for="quantity" class="block mb-2">
                    Quantity:
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    class="w-full border border-gray-300 rounded-md px-4 py-2"
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <button
                  type="submit"
                  className="rounded bg-green-50 px-4 py-2 text-sm font-medium text-green-600"
                >
                  Yes, I'm sure
                </button>

                <button
                  type="button"
                  className="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600"
                  onClick={() => setPopus("")}
                >
                  No, go back
                </button>
              </div>
            </form>
          </div>
        )}
        {/* ADD PRODUCT */}
        {popus === "add" && (
          <div className="rounded-lg bg-white p-8 shadow-2xl absolute top-1/2 left-1/2 z-50 transform -translate-x-1/3 -translate-y-1/2">
            <h2 className="text-lg font-bold">Create product</h2>

            <form
              className="mt-2 text-sm text-gray-500"
              onSubmit={(e) => handleSubmitProduct(e)}
            >
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label for="product" class="block mb-2">
                    Product:
                  </label>
                  <input
                    type="text"
                    id="product"
                    name="product"
                    value={product}
                    class="w-full border border-gray-300 rounded-md px-4 py-2"
                    required
                    onChange={(e) => onChange(e)}
                  />
                </div>

                <div>
                  <label for="photo" class="block mb-2">
                    Photo:
                  </label>
                  <input
                    type="file"
                    id="photo"
                    name="photo"
                    value={photo}
                    class="w-full border border-gray-300 rounded-md px-4 py-2"
                    required
                    onChange={(e) => onChange(e)}
                  />
                </div>

                <div>
                  <label for="description" class="block mb-2">
                    Description:
                  </label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    value={description}
                    class="w-full border border-gray-300 rounded-md px-4 py-2"
                    required
                    onChange={(e) => onChange(e)}
                  />
                </div>

                <div>
                  <label for="price" class="block mb-2">
                    Price:
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={price}
                    class="w-full border border-gray-300 rounded-md px-4 py-2"
                    required
                    onChange={(e) => onChange(e)}
                    min='0'
                  />
                </div>

                <div>
                  <label for="compare_price" class="block mb-2">
                    Compare Price:
                  </label>
                  <input
                    type="number"
                    id="compare_price"
                    name="compare_price"
                    value={compare_price}
                    class="w-full border border-gray-300 rounded-md px-4 py-2"
                    required
                    onChange={(e) => onChange(e)}
                    min='0'
                  />
                </div>

                <div>
                  <label for="category" class="block mb-2">
                    Category:
                  </label>
                  <select
                    id="category"
                    name="category"
                    class="w-full border border-gray-300 rounded-md px-4 py-2"
                    required
                    onChange={(e) => onChange(e)}
                  >
                    {" "}
                    {categories?.map((category, index) => (
                      <option value={categories.id} key={index}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label for="quantity" class="block mb-2">
                    Quantity:
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={quantity}
                    class="w-full border border-gray-300 rounded-md px-4 py-2"
                    required
                    onChange={(e) => onChange(e)}
                    min='0'
                  />
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <button
                  type="submit"
                  className="rounded bg-green-50 px-4 py-2 text-sm font-medium text-green-600"
                >
                  Yes, I'm sure
                </button>

                <button
                  type="button"
                  className="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600"
                  onClick={() => setPopus("")}
                >
                  No, go back
                </button>
              </div>
            </form>
          </div>
        )}
        {/* CUSTOMERS */}
        {/* ORDERS */}
        {/* ANALYTICS */}
        {/* INVENTORY */}
      </>
    );
  };

  return <>{DashboardContent()}</>;
};

export default ShowDashboard;
