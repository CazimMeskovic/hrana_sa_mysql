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


const App = () => {
/*   const korisnikId = 1; // Pretpostavimo da je korisnik sa ID-jem 1 prijavljen
  const korpa = [
      { id: 101, naziv: 'Proizvod 1', kolicina: 2 },
      { id: 102, naziv: 'Proizvod 2', kolicina: 1 },
      // Dodaj još proizvoda po potrebi
  ]; */

  return (

    <Router>
      <Navbar />
      <Cart />
      <Routes>
        {/* Ruta za Ole komponentu */}
        <Route path="/ole" element={<Ole />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/kupovina" element={<Kupovina />} />
        
        {/* Ostale rute za glavnu stranicu */}
        <Route
          path="/"
          element={
            <main className='flex flex-col gap-16 relative'>
              <Hero heroapi={heroapi} />
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

  );
};

export default App;
