import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

export const getBook = createAsyncThunk("BOOK", (bookId) => {

  return axios.get(`/api/book/${bookId}`)
  .then((res) => res.data)
  .catch(err=> console.log(err))
});

const bookReducer = createReducer({}, {
  [getBook.fulfilled]: (state, action) => action.payload,
});

export default bookReducer;