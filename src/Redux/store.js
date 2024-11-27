import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Esto usa `localStorage` como almacenamiento por defecto
import userReducer from './userReducer';

// Configuración de redux-persist
const persistConfig = {
  key: 'root',
  storage, // Usar localStorage
  whitelist: ['userAplication'], // Solo persistir el estado de `userAplication`
};

const persistedReducer = persistReducer(persistConfig, userReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
