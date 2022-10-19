import { ProductType } from "@pages/products/ProductsListing/data";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BasketProduct extends ProductType {
  size: number;
  quantity: number;
}

export interface BasketState {
  basketItems: BasketProduct[];
  numberOfItems: number;
  totalPrice: number;
}

const initialState: BasketState = {
  basketItems: [],
  numberOfItems: 0,
  totalPrice: 0.0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItemToBasket: (state, { payload }: PayloadAction<BasketProduct>) => {
      const itemAlreadyInBasket = state.basketItems.find(
        (item) => item.slug === payload.slug && item.size === payload.size
      );

      itemAlreadyInBasket
        ? itemAlreadyInBasket.quantity++
        : state.basketItems.push(payload);

      state.numberOfItems++;
      state.totalPrice += payload.price * payload.quantity;
    },
  },
});

export const { addItemToBasket } = basketSlice.actions;

const basketReducer = basketSlice.reducer;
export default basketReducer;
