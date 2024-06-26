import axios from "axios";
import { GET_COUPON_SUCCESS, GET_COUPON_FAIL, RESET_COUPON } from "./types";
import { setAlert } from "./alert";

export const check_coupon = (coupon_name) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `JWT ${localStorage.getItem("access")}`,
    },
  };

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/coupons/check-coupon?coupon_name=${coupon_name}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_COUPON_SUCCESS,
        payload: res.data,
      });
      dispatch(setAlert("Coupon applied"));
    } else {
      dispatch({
        type: GET_COUPON_FAIL,
      });
      if (res.data.error) {
        dispatch(setAlert(res.data.error));
      } else {
        dispatch(setAlert("This coupon does not exist"));
      }
    }
  } catch (err) {
    dispatch({
      type: GET_COUPON_FAIL,
      payload: { error: "Coupon does not exist" },
    });
    dispatch(setAlert("This coupon does not exist"));
  }

  window.scrollTo(0, 0);
};
export const reset_coupon = () => async (dispatch) => {
  try {
    dispatch({
      type: RESET_COUPON,
    });
  } catch (err) {
    console.log(err);
  }
};
