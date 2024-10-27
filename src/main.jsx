import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from "react-redux";
import Store from './app/Store.js';
import { Toaster } from 'react-hot-toast';
import store from './components/store.js';
/* import Ole from './components/Ole.jsx'; */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider  store={Store}>
    <Toaster position='top-center' reverseOrder={false} />
   {/*  <Ole /> */}
      <App/>
    </Provider>
  </React.StrictMode>
)
