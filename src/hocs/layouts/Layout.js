import { AnimatePresence, motion } from "framer-motion";
import { connect } from "react-redux";

import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  check_authenticated,
  load_user,
  refresh,
} from "../../redux/actions/auth";

import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import ScrollToTop from "components/navigation/ScrollToTop";
import { get_item_total, get_items, get_total } from "../../redux/actions/cart";
import { SearchProvider } from "components/navigation/SearchContext";

function Layout(props) {
  useEffect(() => {
    const fetchUser = async () => {
      await props.check_authenticated();
      if (props.isAuthenticated) {
        await props.refresh();
        await props.load_user();
        await props.get_items();
        await props.get_total();
        await props.get_item_total();
      }
    };
    fetchUser();
  }, [props.isAuthenticated]);
  return (
    <AnimatePresence>
      <motion.div
        key={props.location?.pathname || ""}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <ToastContainer autoClose={1000} />
        <ScrollToTop />
        <div className="pt-20 min-w-[420px]">
          <SearchProvider>
            <Navbar />
            {/* <Alert /> */}
            {props.children}
            <Footer />
          </SearchProvider>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.Auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  refresh,
  check_authenticated,
  load_user,
  get_items,
  get_total,
  get_item_total,
})(Layout);
