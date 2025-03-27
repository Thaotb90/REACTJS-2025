import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";

export const register = createAsyncThunk("/users/add", async (payload) => {
  const data = await userApi.register(payload);
  console.log("userSlice get data: ", data);
  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
  }
});

export const login = createAsyncThunk("/auth/login", async (payload) => {
  const data = await userApi.login(payload);
  console.log("userSlice get data: ", data);
  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    current: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.current = action.payload;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.current = action.payload;
    });
  },
});

const { reducer } = userSlice;
export default reducer;
