// src/App.jsx

import React from 'react';
import Navbar from './components/Navbar';

import Sidebar from './components/Sidebar';
// Uncomment the following line to import Home component
import Home from './components/Home';
import About from './components/About';
import Service from './components/service';
import ContactUs from './components/contactus';
import './App.css';



const App = () => {
  return (
    <div>
      {/* Uncomment the following line to render the Home component */}
     
      <Navbar />
      <Sidebar />
      <Home />

      <About />
      <Service />
      <ContactUs />

      {/* Uncomment the following line to render the Service component */}
     
      {/* You can add more components here as needed */}
      {/* <Profile /> */}
      {/* <Settings /> */}
    </div>
  );
};

export default App;


