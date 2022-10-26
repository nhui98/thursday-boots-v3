import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CheckoutState {
  email: string;
  country: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postcode: string;
  phone: string;
}

const initialState: CheckoutState = {
  email: "",
  country: "",
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  postcode: "",
  phone: "",
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setCheckoutInfo: (state, { payload }: PayloadAction<CheckoutState>) => {
      state = Object.assign(state, payload);
    },
  },
});

export const { setCheckoutInfo } = checkoutSlice.actions;

const checkoutReducer = checkoutSlice.reducer;
export default checkoutReducer;
