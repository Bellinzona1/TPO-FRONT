import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Importa el Provider de Redux
import store from './Redux/store.js'; // Importa tu configuración de Redux
import App from './App.jsx';
import './index.css';

// Renderiza la aplicación con createRoot
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}> {/* Envolvemos la aplicación en el Provider */}
      <App />
    </Provider>
);
