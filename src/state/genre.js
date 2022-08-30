import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";


export const getBooksOfGenre = createAsyncThunk("GENRES_OF_BOOK", (bookId) => {

    return axios.get(`/api/genres/${bookId}`)
    .then((res) => res.data)
    .catch(err=> console.log(err))
  });

const genreReducer = createReducer({}, {
  [getBooksOfGenre.fulfilled]: (state, action) => {
    console.log(action);
    return action.payload},
});

export default genreReducer;