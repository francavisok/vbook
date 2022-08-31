import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";


export const getAllOrdersFromUser = createAsyncThunk("GET_ALL_FULLFILED_ORDERS",() => {
      return axios
        .get(`/api/order/fullfiledOrders`)
        .then((res) => res.data)
        .catch((error) => console.log(error));
    }
  );

  const ordersReducer = createReducer([], {
    [getAllOrdersFromUser.fulfilled]: (state, action) => action.payload,
  });
  
  export default ordersReducer;