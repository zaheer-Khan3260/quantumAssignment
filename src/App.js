
import './App.css';
import React, { useEffect } from'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from "./components/Footer.jsx"

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('showAnimation');
        } else {
          entry.target.classList.remove('showAnimation');
        }
      });
    });

    const elements = document.querySelectorAll('.animation');

    elements.forEach((el) => {
      observer.observe(el);
    });

    // Clean up the observer when the component unmounts
    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  return (
    <>
    <Header/>
   <Outlet/>
   <Footer/>
   </>
  );
}

export default App;
