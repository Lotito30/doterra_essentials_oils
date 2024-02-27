import { combineReducers } from "redux";
import Alert from "./alert";
import Auth from "./auth";
import Cart from "./cart";
import Categories from "./categories";
import Coupons from "./coupons";
import Orders from "./orders";
import Payment from "./payment";
import Products from "./products";
import Shipping from "./shipping";
import Profile from "./profile";
import Wishlist from "./wishlist";

export default combineReducers({
  Auth,
  Alert,
  Categories,
  Products,
  Cart,
  Shipping,
  Payment,
  Orders,
  Coupons,
  Profile,
  Wishlist,
});
