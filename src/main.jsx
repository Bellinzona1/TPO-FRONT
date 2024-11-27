import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux'; // Importar Provider
import { PersistGate } from 'redux-persist/integration/react'; // Importar PersistGate
import { store, persistor } from './Redux/store.js'; // Importar store y persistor desde tu archivo store.js

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* Proveer el store */}
      <PersistGate loading={null} persistor={persistor}> {/* Esperar a que se recupere el estado persistido */}
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
