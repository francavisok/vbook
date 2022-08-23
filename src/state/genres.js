import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

export const getGenres = createAsyncThunk("GENRES", () => {

  return axios.get('/api/genres')
  .then((res) => res.data)
  .catch(err=> console.log(err))
});

export const getGenresOfBook = createAsyncThunk("GENRES_OF_BOOK", (bookId) => {

    return axios.get(`/api/genres/${bookId}`)
    .then((res) => res.data)
    .catch(err=> console.log(err))
  });

const genresReducer = createReducer([], {
  [getGenres.fulfilled]: (state, action) => action.payload,
  [getGenresOfBook.fulfilled]: (state, action) => action.payload,
});

export default genresReducer;