import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FlyoutState {
  toggleBasket: boolean;
}

const initialState: FlyoutState = {
  toggleBasket: false,
};

export const flyoutSlice = createSlice({
  name: "flyout",
  initialState,
  reducers: {
    setToggleBasket: (state, { payload }: PayloadAction<boolean>) => {
      if (payload) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
      state.toggleBasket = payload;
    },
  },
});

export const { setToggleBasket } = flyoutSlice.actions;

const flyoutReducer = flyoutSlice.reducer;
export default flyoutReducer;
