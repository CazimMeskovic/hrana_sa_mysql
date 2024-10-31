/* import React from 'react';
import { Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories } from './components';
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data.js';
 import Ole from './components/Ole.jsx'; 

const App = () => {
  return (
   <>
  
 <Ole /> 
   
      <Navbar/>
      <Cart />
      <main className='flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
   </>
  )
}

export default App; */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories } from './components';
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data.js';
/* import Ole from './components/Ole'; // Importujte novu stranicu */
import Ole from './components/Ole.jsx';
import LoginPage from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import Kupovina from './components/Kupovina.jsx';
import CheckoutPage from './components/CheckoutPage .jsx';



const App = () => {
 /*  const paypalClientId = process.env.VITE_PAYPAL_CLIENT_ID; */


  return (
    <>
  

    <Router>
      <Navbar />
      <Cart />
      <Routes>
        {/* Ruta za Ole komponentu */}
        
        <Route path="/" element={<Hero heroapi={heroapi} />} />
        <Route path="/ole" element={<Ole />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/kupovina" element={<Kupovina />} />
        <Route path="/pay" element={<CheckoutPage />} />
        
        {/* Ostale rute za glavnu stranicu */}
      
        <Route
          path="/dr"
          element={
            <main className='flex flex-col gap-16 relative pt-24 '>
             {/*  <Hero heroapi={heroapi} /> */}
              <Sales endpoint={popularsales} ifExists />
              <FlexContent endpoint={highlight} ifExists />
              <Sales endpoint={toprateslaes} />
              <FlexContent endpoint={sneaker} />
              <Stories story={story} />
              <Footer footerAPI={footerAPI} />
           
            </main>
              
          }
          
        />
        
      </Routes>
     {/*  <Footer footerAPI={footerAPI} /> */}
    </Router>
</>
  );
};

export default App;
