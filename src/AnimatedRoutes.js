import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import ContactUs from "containers/pages/ContactUs";
import AboutUs from "containers/pages/AboutUs";
import Experience from "containers/pages/Experience";
import Products from "containers/pages/Products";
import UserSingIn from "containers/pages/UserSignIn";
import UserSingUp from "containers/pages/UserSignUp";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/signin" element={<UserSingIn />} />
        <Route path="/signup" element={<UserSingUp />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
