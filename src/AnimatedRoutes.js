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
import Shop from "containers/pages/Shop";
import UserSingIn from "containers/auth/UserSignIn";
import UserSingUp from "containers/auth/UserSignUp";

import Activate from './containers/auth/Activate'

import { AnimatePresence } from "framer-motion";
import Reset_Password from "containers/auth/ResetPassword";
import Reset_Password_Confirm from "containers/auth/ResetPasswordConfirm";
import ProductDetails from "containers/pages/ProductDetails";
import Search from "containers/pages/Search";


function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>

        <Route path="*" element={<Error404 />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/experience" element={<Experience />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/contact" element={<ContactUs />} />
        <Route exact path="/product/:productId" element={<ProductDetails />} />
        {/* <Route exact path="/search" element={<Search />} /> */}

        {/* AUTHENTICATION */}
        <Route exact path="/signin" element={<UserSingIn />} />
        <Route exact path="/signup" element={<UserSingUp />} />
        <Route exact path="/activate/:uid/:token" element={<Activate />} />
        <Route exact path="/reset_password" element={<Reset_Password />} />
        <Route exact path="/password/reset/confirm/:uid/:token" element={< Reset_Password_Confirm />} />
        
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
