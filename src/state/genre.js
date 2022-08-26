import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";


export const getGenresOfBook = createAsyncThunk("GENRES_OF_BOOK", (bookId) => {

    return axios.get(`/api/genres/${bookId}`)
    .then((res) => res.data)
    .catch(err=> console.log(err))
  });

const genreReducer = createReducer([], {
  [getGenresOfBook.fulfilled]: (state, action) => action.payload,
});

export default genreReducer;