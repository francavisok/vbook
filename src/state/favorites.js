import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

export const addFavorite = createAsyncThunk(
  "ADD_FAVORITE",
  (book, thunkAPI) => {
    const { user } = thunkAPI.getState();
    if (!user.id) throw new Error("You need to be logged in");
    return axios
      .put(`/api/user/favorites?userId=${user.id}`, book)
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }
);

export const removeFavorite = createAsyncThunk(
  "REMOVE_FAVORITE",
  (bookId, thunkAPI) => {
    const { user } = thunkAPI.getState();
    if (!user.id) throw new Error("You need to be logged in");
    return axios
      .delete(`/api/user/favorites?userId=${user.id}&bookId=${bookId}`)
      .then((res) => {
        return res.data;
      })
      .catch((error) => console.log(error));
  }
);

export const getAllFavoritesFromUser = createAsyncThunk(
  "GET_FAVORITES_FROM_USER",
  (userId, thunkAPI) => {
    return axios
      .get(`/api/user/favorites/all?userId=${userId}`)
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }
);

const favoritesReducer = createReducer([], {
  [addFavorite.fulfilled]: (state, action) => {
    state.favorites.push(action.payload);
  },
  [removeFavorite.fulfilled]: (state, action) => {
    state.favorites = state.favorites.filter((movie) => {
      return movie.id !== action.payload.id;
    });
  },
  [getAllFavoritesFromUser.fulfilled]: (state, action) => action.payload,
});

export default favoritesReducer;
