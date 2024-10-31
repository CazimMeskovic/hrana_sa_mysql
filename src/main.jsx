import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from "react-redux";
import Store from './app/Store.js';
import { Toaster } from 'react-hot-toast';
import store from './components/store.js';
/* import Ole from './components/Ole.jsx'; */
import { Helmet } from 'react-helmet';

/* const paypalClientId = process.env.REACT_APP_PAYPAL_CLIENT_ID; */

/* const paypalClientId = process.env.VITE_PAYPAL_CLIENT_ID; */
const paypalClientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;

console.log('PayPal Client ID:', paypalClientId);

// Ensure the ID is defined before using it
/* if (!paypalClientId) {
 console.error('PayPal client ID is not defined. Please check your .env file.');
 return <div>Error: PayPal client ID not found.</div>;
}
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider  store={Store}>
    <Toaster position='top-center' reverseOrder={false} />
   {/*  <Ole /> */}
   <Helmet>
   
        <script src={`https://www.paypal.com/sdk/js?client-id=${paypalClientId}`}></script>
      </Helmet>
      <App/>
    </Provider>
  </React.StrictMode>
)
