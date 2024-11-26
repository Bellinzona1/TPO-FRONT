import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(item => item.name === action.payload.name);

      if (existingItem) {
        // Si el producto ya está en el carrito, incrementa la cantidad
        existingItem.quantity += 1;
      } else {
        // Si no, agrega el nuevo producto al carrito
        state.cart.push(action.payload);
      }

      console.log("Updated cart:", JSON.stringify(state.cart, null, 2)); // Muestra el carrito actualizado
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
    },
    increaseQuantity: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload.id);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload.id);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
