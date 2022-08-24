import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("USER", () => {
  return axios.get("/api/user/me")
  .then((res) => res.data)
  .catch(err=> console.log(err))
});


export const postUser = createAsyncThunk("NEW_USER", (userObj, thunkAPI) => {
  return axios.post("http://localhost:3001/api/auth/signin", userObj)
  .then((res) => res.data);
});

export const postLoginUser = createAsyncThunk("LOGIN_USER", (userObj, thunkAPI) => {
  return axios.post("/api/auth/login", userObj)
  .then((res) => res.data)
  .catch(err=> console.log(err))
});

export const postLogoutUser = createAsyncThunk("LOGOUT_USER", (userObj, thunkAPI) => {
  return axios.post("/api/users/logout", userObj)
  .then((res) => res.data)
  .catch(err=> console.log(err))
});

const userReducer = createReducer({}, {
  [getUser.fulfilled]: (state, action) => action.payload,
  [postUser.fulfilled]: (state, action) => action.payload,
  [postLoginUser.fulfilled]: (state, action) => action.payload,
  [postLogoutUser.fulfilled]: (state, action) => action.payload,
});

export default userReducer;