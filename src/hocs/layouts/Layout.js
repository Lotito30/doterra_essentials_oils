import { motion } from "framer-motion";
import { connect } from "react-redux";

import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  check_authenticated,
  load_user,
  logout,
  refresh,
} from "../../redux/actions/auth";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import ScrollToTop from "components/navigation/ScrollToTop";
import { get_item_total, get_items, get_total } from "../../redux/actions/cart";
import { SearchProvider } from "components/navigation/SearchContext";
import { get_user_profile } from "../../redux/actions/profile";
import { get_products } from "../../redux/actions/products";
import { get_categories } from "../../redux/actions/categories";
import { Oval } from "react-loader-spinner";

function Layout(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      await props.check_authenticated();
      if (props.isAuthenticated) {
        await props.refresh();
        await props.load_user();
        await props.get_user_profile();
        // if (props.user === null) {
        //   await props.logout();
        // }
      }
      await props.get_categories();
      await props.get_items();
      await props.get_total();
      await props.get_item_total();
      setLoading(false);
    };
    fetchUser();
  }, [props.isAuthenticated]);
  return (
    <motion.div
      initial={{ opacity: 0, transition: { duration: 0.3 } }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <ToastContainer autoClose={1000} />
      <ScrollToTop />
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
        <div className="pt-20 min-w-[420px]">
          <SearchProvider>
            <Navbar />
            <div className="px-2 sm:px-0">{props.children}</div>
            <Footer />
          </SearchProvider>
        </div>
      )}
    </motion.div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.Auth.isAuthenticated,
  profile: state.Profile.profile,
  categories: state.Categories.categories,
  user: state.Auth.user,
});

export default connect(mapStateToProps, {
  refresh,
  check_authenticated,
  load_user,
  get_items,
  get_total,
  get_item_total,
  get_user_profile,
  get_products,
  get_categories,
  logout,
})(Layout);
