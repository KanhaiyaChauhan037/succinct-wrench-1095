import {
  GET_Product,
  GET_Product_Error,
  GET_Product_Load,
  GET_Product_Success,
  GET_Single_Product,
} from "./actionType";
import axios from "axios";

const getproductSucess = (payload) => {
  return {
    type: GET_Product_Success,
    payload,
  };
};

const getSingleproductSucess = (payload) => {
  return {
    type: GET_Single_Product,
    payload,
  };
};

const getproductError = () => {
  return {
    type: GET_Product_Error,
  };
};

const getproductLoad = () => {
  return {
    type: GET_Product_Load,
  };
};

export const getData = () => async (dispatch) => {
  try {
    dispatch(getproductLoad());
    let res = await axios.get("https://whitefeather123.herokuapp.com/data");
    dispatch(getproductSucess(res.data));
  } catch (error) {
    dispatch(getproductError());
  }
};

export const getSingleData = (id) => async (dispatch) => {
  try {
    dispatch(getproductLoad());
    let res = await axios.get(
      `https://whitefeather123.herokuapp.com/data/${id}`
    );
    dispatch(getSingleproductSucess(res.data));
    return;
  } catch (error) {
    dispatch(getproductError());
  }
};

export const postData = async (data) => {
  try {
    let res = await axios.post(
      "https://whitefeather123.herokuapp.com/data",
      data
    );
    return true;
  } catch (error) {
    return false;
  }
};

export const deleteData = async (id) => {
  try {
    let res = await axios.delete(
      `https://whitefeather123.herokuapp.com/data/${id}`
    );
    return true;
  } catch (error) {
    return false;
  }
};

export const updateData = async (id, data) => {
  try {
    let res = await axios.patch(
      `https://whitefeather123.herokuapp.com/data/${id}`,
      data
    );
    return true;
  } catch (error) {
    return false;
  }
};
