import axios from "axios";
import {
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAIL,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_FAIL,
} from "./types";

export const get_user_profile = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Accept": "application/json",
        "Authorization": `JWT ${localStorage.getItem("access")}`,
      },
    };

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/profile/user`,
        config
      );

      if (res.status === 200) {
        dispatch({
          type: GET_USER_PROFILE_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: GET_USER_PROFILE_FAIL,
        });
      }
    } catch (error) {
      console.log(
        `Error response data (GET_user_Profile): ${error.response.data}`
      );
      dispatch({
        type: GET_USER_PROFILE_FAIL,
      });
    }
  }
};

export const update_user_profile =
  (
    street,
    building_villa,
    department,
    city,
    district,
    zipcode,
    phone,
    country_region
  ) =>
  async (dispatch) => {
    if (localStorage.getItem("access")) {
      const config = {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `JWT ${localStorage.getItem("access")}`,
        },
      };

      const body = JSON.stringify({
        street,
        building_villa,
        department,
        city,
        district,
        zipcode,
        phone,
        country_region,
      });

      try {
        const res = axios.put(
          `${process.env.REACT_APP_API_URL}/api/profile/update`,
          body,
          config
        );

        if (res.status === 200) {
          dispatch({
            type: UPDATE_USER_PROFILE_SUCCESS,
            payload: res.data,
          });
        } else {
          dispatch({
            type: UPDATE_USER_PROFILE_FAIL,
          });
        }
      } catch (error) {
        console.log(
          `Error response data (Update_User_Profile): ${error.response.data}`
        );
        dispatch({
          type: UPDATE_USER_PROFILE_FAIL,
        });
      }
    }
  };
