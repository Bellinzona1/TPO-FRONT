import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; 
import store from './Redux/store.js'; 
import App from './App.jsx';
import './index.css';

// Renderiza la aplicación con createRoot
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}> {/* Envolvemos la aplicación en el Provider */}
      <App />
    </Provider>
);
