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
    decrementItemQuantityFromBasket: (
      state,
      {
        payload: { size, slug },
      }: PayloadAction<{
        slug: BasketProduct["slug"];
        size: BasketProduct["size"];
      }>
    ) => {
      const index = state.basketItems.findIndex(
        (item) => item.slug === slug && item.size === size
      );

      if (index < 0) return;

      state.numberOfItems -= 1;
      state.totalPrice -= state.basketItems[index].price;
      state.basketItems[index].quantity > 1
        ? (state.basketItems[index].quantity -= 1)
        : state.basketItems.splice(index, 1);
    },
    removeItemFromBasket: (
      state,
      {
        payload: { size, slug },
      }: PayloadAction<{
        slug: BasketProduct["slug"];
        size: BasketProduct["size"];
      }>
    ) => {
      const index = state.basketItems.findIndex(
        (item) => item.slug === slug && item.size === size
      );

      if (index < 0) return;

      state.numberOfItems -= state.basketItems[index].quantity;
      state.totalPrice -=
        state.basketItems[index].quantity * state.basketItems[index].price;
      state.basketItems.splice(index, 1);
    },
  },
});

export const {
  addItemToBasket,
  decrementItemQuantityFromBasket,
  removeItemFromBasket,
} = basketSlice.actions;

const basketReducer = basketSlice.reducer;
export default basketReducer;
