import React from 'react';
import Navbar from '../Navbar/Navbar';
import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About';
import Skills from '../../Pages/Skills/Skills';
import Work from '../../Pages/Work/Work';
import Education from '../../Pages/Education/Education';
import Contact from '../../Pages/Contact/Contact';
import Footer from '../Footer/Footer';

import ScrollToTop from 'react-scroll-to-top';

import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Landing = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />

        <Home />
        <About />
        <Skills />
        <Work />
        <Education />
        <Contact />
      </BrowserRouter>
      <ScrollToTop
        style={{
          backgroundColor: 'teal',
          borderRadius: '5%',
          border: '2px solid teal',
          color: 'white',
        }}
      />
      <Footer />
    </>
  );
};

export default Landing;
