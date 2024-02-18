import { GET_COUPON_SUCCESS, GET_COUPON_FAIL } from "../actions/types";

const initialState = {
  coupon: null,
  notFound : null,
};

export default function Coupons(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_COUPON_SUCCESS:
      return {
        ...state,
        coupon: payload.coupon,
        notFound:null,
      };

    case GET_COUPON_FAIL:
      return {
        ...state,
        coupon: null,
        notFound:payload.error,
      };
    default:
      return state;
  }
}
