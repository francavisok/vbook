import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

export const addToCart = createAsyncThunk(
  "ADD_TO_CART",
  (book, thunkAPI) => {
    const { user } = thunkAPI.getState();
    if (!user.id) throw new Error("You need to be logged in");
    return axios
      .put(`/api/cart`, book, {
        params: {
          userId: user.id
        }
      })
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }
);

export const removeFromCart = createAsyncThunk(
  "REMOVE_FROM_CART",
  (bookId, thunkAPI) => {
    const { user } = thunkAPI.getState();
    if (!user.id) throw new Error("You need to be logged in");
    return axios
      .delete(`/api/user/cart?userId=${user.id}&bookId=${bookId}`)
      .then((res) => {
        return res.data;
      })
      .catch((error) => console.log(error));
  }
);

export const getAllItemsInCart = createAsyncThunk(
  "GET_CART_ITEMS_FROM_USER",
  (userId, thunkAPI) => {
    return axios
      .get(`/api/user/cart/all?userId=${userId}`)
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }
);

const cartReducer = createReducer([], {
  [addToCart.fulfilled]: (state, action) => {
    state.favorites.push(action.payload);
  },
  [removeFromCart.fulfilled]: (state, action) => {
    state.favorites = state.favorites.filter((movie) => {
      return movie.id !== action.payload.id;
    });
  },
  [getAllItemsInCart.fulfilled]: (state, action) => action.payload,
});

export default cartReducer;
