import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";


export const getOrder = createAsyncThunk(
    "GET_ORDER",
    () => {
      return axios
        .get(`/api/order`)
        .then((res) => res.data)
        .catch((error) => console.log(error));
    }
  );
  export const continueOrder = createAsyncThunk(
    "CONTINUE_ORDER",
    () => {
      return axios
        .put(`/api/order`)
        .then((res) => res.data)
        .catch((error) => console.log(error));
    }
  );

  export const payOrder = createAsyncThunk(
    "PAY_ORDER",
    ({direction, paymentMethod}) => {
      return axios
        .put(`/api/order/pay`,{direction, paymentMethod:"Credit card"})
        .then((res) => res.data)
        .catch((error) => console.log(error));
    }
  );


  const orderReducer = createReducer([], {

    [getOrder.fulfilled]: (state, action) => action.payload,
    [continueOrder.fulfilled]: (state, action) => action.payload,
    [payOrder.fulfilled]: (state, action) => action.payload,


  });
  
  export default orderReducer;