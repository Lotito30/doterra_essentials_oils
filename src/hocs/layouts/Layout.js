import { motion, AnimatePresence } from "framer-motion";
import { connect } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  check_authenticated,
  load_user,
  refresh,
} from "../../redux/actions/auth";
import { useEffect } from "react";

import { get_items, get_total, get_item_total } from "../../redux/actions/cart";

function Layout(props) {
  useEffect(() => {
    props.check_authenticated();
    props.refresh();
    props.load_user();
    if (props.isAuthenticated) {
      props.get_items();
      props.get_total();
      props.get_item_total();
    }
  }, [props.isAuthenticated]);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={props.location?.pathname || ""}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <ToastContainer autoClose={4000} />
        <div className="pt-20">{props.children}</div>
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
