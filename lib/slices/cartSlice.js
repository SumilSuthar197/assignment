import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  paymentMethods: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      console.log(action.payload);
      state.products = action.payload.products;
      state.paymentMethods = action.payload.paymentMethods;
      state.totalPrice = action.payload.products.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },
    incrementQuantity: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (product) {
        product.quantity += 1;
      }
      state.totalPrice = state.products.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },
    decrementQuantity: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      } else {
        state.products = state.products.filter(
          (product) => product.id !== action.payload.id
        );
      }
      state.totalPrice = state.products.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },
  },
});

export const { setProducts, incrementQuantity, decrementQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
