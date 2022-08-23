import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

export const getBooks = createAsyncThunk("BOOKS", () => {

  return axios.get(`/api/book`)
  .then((res) => res.data)
  .catch(err=> console.log(err))
});

const booksReducer = createReducer([], {
  [getBooks.fulfilled]: (state, action) => action.payload,
});

export default booksReducer;