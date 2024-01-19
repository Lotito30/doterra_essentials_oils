import { motion } from "framer-motion";
import { connect } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  check_authenticated,
  load_user,
  refresh,
} from "../../redux/actions/auth";
import { useEffect } from "react";

function Layout(props) {
  useEffect(() => {
    props.check_authenticated();
    props.refresh();
    props.load_user();
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, transition: { duration: 0.2 } }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <ToastContainer autoClose={4000} />
      <div className="pt-20">{props.children}</div>
    </motion.div>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  refresh,
  check_authenticated,
  load_user,
})(Layout);
