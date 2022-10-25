import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  accessToken: string | null;
}

const initialState: UserState = {
  accessToken: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAccessToken: (state, { payload }: PayloadAction<string>) => {
      state.accessToken = payload;
    },
    removeAccessToken: (state) => {
      state.accessToken = null;
    },
  },
});

export const { removeAccessToken, setAccessToken } = userSlice.actions;

const userReducer = userSlice.reducer;
export default userReducer;
