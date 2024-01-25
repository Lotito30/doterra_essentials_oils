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

import Activate from "./containers/auth/Activate";

import Reset_Password from "containers/auth/ResetPassword";
import Reset_Password_Confirm from "containers/auth/ResetPasswordConfirm";
import ProductDetails from "containers/pages/ProductDetails";

import Cart from "containers/pages/Cart";
import Checkout from "containers/pages/Checkout";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="*" element={<Error404 />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/shop" element={<Shop />} />
      <Route exact path="/experience" element={<Experience />} />
      <Route exact path="/about" element={<AboutUs />} />
      <Route exact path="/contact" element={<ContactUs />} />
      <Route exact path="/product/:productId" element={<ProductDetails />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/checkout" element={<Checkout />} />

      {/* AUTHENTICATION */}
      <Route exact path="/signin" element={<UserSingIn />} />
      <Route exact path="/signup" element={<UserSingUp />} />
      <Route exact path="/activate/:uid/:token" element={<Activate />} />
      <Route exact path="/reset_password" element={<Reset_Password />} />
      <Route
        exact
        path="/password/reset/confirm/:uid/:token"
        element={<Reset_Password_Confirm />}
      />
    </Routes>
  );
}

export default AnimatedRoutes;
