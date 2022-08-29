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


  const orderReducer = createReducer([], {

    [getOrder.fulfilled]: (state, action) => action.payload,
  });
  
  export default orderReducer;