import { Dialog, Transition } from "@headlessui/react";
import { MenuAlt2Icon, XIcon } from "@heroicons/react/outline";
import icono from "assets/img/iconodoTERRA3.png";
import { DashboardContext } from "components/dashboard/DashboardContext";
import DashboardLink from "components/dashboard/DashboardLink";
import ShowDashboard from "components/dashboard/ShowDashboard";
import { Fragment, useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Oval } from "react-loader-spinner";
import { connect } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import { logout } from "../../redux/actions/auth";
import { get_item_total, get_items, get_total } from "../../redux/actions/cart";
import { get_order_detail, list_orders } from "../../redux/actions/orders";
import {
  get_user_profile,
  update_user_profile,
} from "../../redux/actions/profile";
import { create_product } from "../../redux/actions/products";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Dashboard = ({
  list_orders,
  orders,
  order,
  isAuthenticated,
  user,
  get_order_detail,
  update_user_profile,
  profile,
  get_user_profile,
  coupon,
  products,
  categories,
}) => {
  const { content, setContent } = useContext(DashboardContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const params = useParams();
  const transaction_id = params.transaction_id;

  useEffect(() => {
    setLoading(true);
    const fetchDashboard = async () => {
      await list_orders();
      if (content === "Purchase Details") {
        await get_order_detail(transaction_id);
      }
      await get_user_profile();
      setLoading(false);
    };
    fetchDashboard();
  }, [content, get_user_profile]);

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Helmet>
        <title>Dashboard | doTERRA</title>
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
      <div className="min-w-[420px]">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <Link
                  to="/"
                  className="w-max"
                  onClick={() => setContent("Dashboard")}
                >
                  <div className="flex-shrink-0 flex items-center gap-2 pl-2">
                    <img className="w-16 h-16" src={icono} alt="" />
                    <h1 className="text-2xl font-sans font-bold">doTERRA</h1>
                  </div>
                </Link>
                <div className="mt-5 flex-1 h-0 overflow-y-auto">
                  <nav className="px-2 space-y-1">
                    {/* DASHBOARD LINK */}
                    <DashboardLink user={user} />
                  </nav>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 bg-white overflow-y-auto">
            <Link
              to="/"
              className="w-max"
              onClick={() => setContent("Dashboard")}
            >
              <div className="flex-shrink-0 flex items-center gap-2 pl-2">
                <img className="w-16 h-16" src={icono} alt="" />
                <h1 className="text-2xl font-sans font-bold">doTERRA</h1>
              </div>
            </Link>
            <div className="mt-5 flex-grow flex flex-col">
              <nav className="flex-1 px-2 pb-4 space-y-1">
                {/* DASHBOARD LINK */}
                <DashboardLink user={user}/>
              </nav>
            </div>
          </div>
        </div>
        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
            <button
              type="button"
              className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex-1 px-4 flex justify-between">
              <div className="flex-1 flex">
              </div>
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">View notifications</span>
                </button>
              </div>
            </div>
          </div>

          <main className="flex-1">
            {loading ? (
              <div className="flex w-full h-screen -mt-16 items-center justify-center">
                <p className="w-max p-6 text-base rounded-xl">
                  <Oval
                    visible={true}
                    height="100"
                    width="100"
                    color="#f59e0b"
                    ariaLabel="oval-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    secondaryColor="transparent"
                  />{" "}
                </p>
              </div>
            ) : (
              <div className="py-6 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl mb-4 font-bold">{content}</h1>

                <ShowDashboard
                  user={user}
                  orders={orders}
                  order={order}
                  get_order_detail={get_order_detail}
                  loading={loading}
                  update_user_profile={update_user_profile}
                  profile={profile}
                  coupon={coupon}
                  products={products}
                  categories={categories}
                  create_product={create_product}
                />
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  orders: state.Orders.orders,
  order: state.Orders.order,
  isAuthenticated: state.Auth.isAuthenticated,
  user: state.Auth.user,
  profile: state.Profile.profile,
  coupon: state.Coupons.coupon,
  products: state.Products.products,
  categories: state.Categories.categories,
});
export default connect(mapStateToProps, {
  list_orders,
  get_items,
  get_total,
  get_item_total,
  get_order_detail,
  logout,
  update_user_profile,
  get_user_profile,
  create_product,
})(Dashboard);
