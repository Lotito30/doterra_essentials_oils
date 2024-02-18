import Home from "containers/Home";
import SignIn from "containers/auth/SignIn";
import SignUp from "containers/auth/SignUp";
import Error404 from "containers/errors/Error404";
import AboutUs from "containers/pages/AboutUs";
import ContactUs from "containers/pages/ContactUs";
import Experience from "containers/pages/Experience";
import Shop from "containers/pages/Shop";
import {
  Route,
  Routes,
  useLocation
} from "react-router-dom";

import Activate from "./containers/auth/Activate";

import Reset_Password from "containers/auth/ResetPassword";
import Reset_Password_Confirm from "containers/auth/ResetPasswordConfirm";
import ProductDetails from "containers/pages/ProductDetails";

import Cart from "containers/pages/Cart";
import Checkout from "containers/pages/Checkout";
import Dashboard from "containers/pages/Dashboard";
import Thankyou from "containers/pages/ThankYou";




function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="*" element={<Error404 />} />
      <Route exact path="/" element={<Home />} />

      <Route exact path="/shop" element={<Shop />} />
      <Route exact path="/product/:productId" element={<ProductDetails />} />

      <Route exact path="/experience" element={<Experience />} />
      <Route exact path="/about" element={<AboutUs />} />
      <Route exact path="/contact" element={<ContactUs />} />

      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/checkout" element={<Checkout />} />

      {/* AUTHENTICATION */}
      <Route exact path="/signin" element={<SignIn />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/activate/:uid/:token" element={<Activate />} />
      <Route exact path="/reset_password" element={<Reset_Password />} />
      <Route exact path="/password/reset/confirm/:uid/:token" element={<Reset_Password_Confirm />} />

      <Route exact path="/thankyou" element={<Thankyou />} />
      
      {/* DASHBOARD */}
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/dashboard/payments" element={<Dashboard />} />
      <Route exact path="/dashboard/payment/:transaction_id" element={<Dashboard />} />
      <Route exact path="/dashboard/profile/edit" element={<Dashboard />} />
    </Routes>
  );
}

export default AnimatedRoutes;
