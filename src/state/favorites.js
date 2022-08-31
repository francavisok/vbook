import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

export const addFavorite = createAsyncThunk(
  "ADD_FAVORITE",
  (book, thunkAPI) => {
    const { user } = thunkAPI.getState();
    if (!user.id) throw new Error("You need to be logged in");
    return axios
      .post(`/api/user/favorites/${book.id}`)
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }
);

export const removeFavorite = createAsyncThunk(
  "REMOVE_FAVORITE",
  (book, thunkAPI) => {
    const { user } = thunkAPI.getState();
    if (!user.id) throw new Error("You need to be logged in");
    return axios
      .delete(`/api/user/favorites/${book.id}`)
      .then((res) => {
        return res.data;
      })
      .catch((error) => console.log(error));
  }
);

export const getAllFavoritesFromUser = createAsyncThunk(
  "GET_FAVORITES_FROM_USER",
  () => {
    return axios
      .get(`/api/user/auth/me`)
      .then((res) => res.data.favorites)
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
