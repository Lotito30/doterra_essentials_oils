import axios from "axios";
import {
  GET_PAYMENT_TOTAL_FAIL,
  GET_PAYMENT_TOTAL_SUCCESS,
  LOAD_BT_TOKEN_SUCCESS,
  LOAD_BT_TOKEN_FAIL,
  PAYMENT_SUCCESS,
  PAYMENT_FAIL,
  RESET_PAYMENT_INFO,
  SET_PAYMENT_LOADING,
  REMOVE_PAYMENT_LOADING,
} from "./types";
import { get_item_total } from "./cart";
import { setAlert } from "./alert";

export const get_payment_total =
  (shipping_id, coupon_name) => async (dispatch) => {
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
      },
    };
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/payment/get-payment-total?shipping_id=${shipping_id}&coupon_name=${coupon_name}`,
        config
      );

      if (res.status === 200 && !res.data.error) {
        dispatch({
          type: GET_PAYMENT_TOTAL_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: GET_PAYMENT_TOTAL_FAIL,
        });
      }
    } catch (error) {
      console.log(`Error response data (Get_payment): ${error.response.data}`);
      dispatch({
        type: GET_PAYMENT_TOTAL_FAIL,
      });
    }
  };
export const get_client_token = () => async (dispatch) => {
  const config = {
    Headers: {
      Accept: "application/json",
      Authorization: `JWT ${localStorage.getItem("access")}`,
    },
  };

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/payment/get-token`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: LOAD_BT_TOKEN_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: LOAD_BT_TOKEN_FAIL,
      });
    }
  } catch (error) {
    console.log(
      `Error response data (get_client_token): ${error.response.data}`
    );
    dispatch({
      type: LOAD_BT_TOKEN_FAIL,
    });
  }
};

export const process_payment =
  (
    nonce,
    shipping_id,
    coupon_name,
    full_name,
    address_line_1,
    address_line_2,
    city,
    state_province_region,
    postal_zip_code,
    telephone_number,
    country_region
  ) =>
  async (dispatch) => {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
      },
    };

    const body = JSON.stringify({
      nonce,
      shipping_id,
      coupon_name,
      full_name,
      address_line_1,
      address_line_2,
      city,
      state_province_region,
      postal_zip_code,
      country_region,
      telephone_number,
    });

    dispatch({
      type: SET_PAYMENT_LOADING,
    });
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/payment/make-payment`,
        body,
        config
      );
      if (res.status === 200 && res.data.success) {
        dispatch({
          type: PAYMENT_SUCCESS,
        });
        dispatch(setAlert(res.data.success, "green"));
        dispatch(get_item_total());
      } else {
        dispatch({
          type: PAYMENT_FAIL,
        });
        dispatch(setAlert(res.data.error, "red"));
      }
    } catch (err) {
      console.log(
        `Error response data make-payment: ${JSON.stringify(err.response)}`
      );
      dispatch({
        type: PAYMENT_FAIL,
      });
      dispatch(setAlert("Error processing payment", "red"));
    }
    dispatch({
      type: REMOVE_PAYMENT_LOADING,
    });
  };

export const reset = () => (dispatch) => {
  try {
    dispatch({
      type: RESET_PAYMENT_INFO,
    });
  } catch (error) {
    console.log(`Error reset response: ${error.response.data}`);
    dispatch({});
  }
};
