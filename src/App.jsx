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
/* 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories } from './components';
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data.js';
import Ole from './components/Ole.jsx';
import LoginPage from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import Kupovina from './components/Kupovina.jsx';
import CheckoutPage from './components/CheckoutPage .jsx';



const App = () => {


  return (
    <>
  

    <Router>
      <Navbar />
      <Cart />
      <Routes>
      
        
        <Route path="/" element={<Hero heroapi={heroapi} />} />
        <Route path="/ole" element={<Ole />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/kupovina" element={<Kupovina />} />
        <Route path="/pay" element={<CheckoutPage />} />
        
      
      
        <Route
          path="/dr"
          element={
            <main className='flex flex-col gap-16 relative pt-24 '>
            
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
   
    </Router>
</>
  );
};

export default App;
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories } from './components';
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data.js';
import Ole from './components/Ole.jsx';
import LoginPage from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import Kupovina from './components/Kupovina.jsx';
import CheckoutPage from './components/CheckoutPage .jsx';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Cart />
        <Routes>
          <Route path="/" element={<Hero heroapi={heroapi} />} />
          <Route path="/ole" element={<Ole />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/kupovina" element={<Kupovina />} />
          <Route path="/pay" element={<CheckoutPage />} />

          {/* Zaštićena ruta za /dr */}
          <Route
            path="/dr"
            element={
              <ProtectedRoute
                element={
                  <main className="flex flex-col gap-16 relative pt-24">
                    <Sales endpoint={popularsales} ifExists />
                    <FlexContent endpoint={highlight} ifExists />
                    <Sales endpoint={toprateslaes} />
                    <FlexContent endpoint={sneaker} />
                    <Stories story={story} />
                    <Footer footerAPI={footerAPI} />
                  </main>
                }
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
