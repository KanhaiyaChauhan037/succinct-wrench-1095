import {
  GET_Product_Error,
  GET_Product_Load,
  GET_Product_Success,
  GET_Single_Product,
} from "./actionType";

let init = {
  singleData: {},
  data: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = init, action) => {
  switch (action.type) {
    case GET_Product_Success: {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: false,
      };
    }

    case GET_Product_Error: {
      return {
        ...state,
        isError: true,
      };
    }

    case GET_Product_Load: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_Single_Product: {
      return {
        ...state,
        singleData: action.payload,
        isLoading: false,
        isError: false,
      };
    }
    
    default: {
      return state;
    }
  }
};
