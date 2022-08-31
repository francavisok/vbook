import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

export const addReview = createAsyncThunk("ADD_REVIEW", (obj) => {
  const bookId = obj.bookId;
  const payload = {
    valoration: obj.valoration,
    reviewComment: obj.reviewComment,
  };
  return axios
    .post(`/api/reviews/addReview/${bookId}`, payload)
    .then((res) => res.data)
    .catch((error) => console.log(error));
});

const reviewReducer = createReducer(
  {},
  {
    [addReview.fulfilled]: (state, action) => action.payload,
  }
);

export default reviewReducer;
