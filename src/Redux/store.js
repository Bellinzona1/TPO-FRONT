import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// Función para cargar el carrito desde localStorage
const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : { cart: [] }; // Si no hay carrito, devuelve un carrito vacío
};

// Configura el store
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: loadCartFromLocalStorage(), // Carga el estado del carrito desde localStorage
});

// Suscribirse a cambios en el carrito y guardarlos en localStorage
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('cart', JSON.stringify(state.cart)); // Guarda el carrito actualizado en localStorage
});

export default store;
