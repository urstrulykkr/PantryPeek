
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll'; // Rename Link to ScrollLink
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Nutrition from './Nutrition';
import logoImg from './assets/DWIPzd01.svg'

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const textList = ['Money', 'Time', 'Effort', 'Food'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((textIndex + 1) % textList.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [textIndex]);


  const scrollToNutrition = () => {
    scroll.scrollTo('nutrition-section', {
      duration: 800,
      smooth: 'easeInOutQuad',
    });
  };

  return (
    <div>
      <header className="text-center">
        <div className="logo">
          <h1>Pantry Peek <img className="logo-img" src={logoImg}></img></h1>
         
        </div>

        
      </header>

      <Element name="home">
        <div className="welcome-text text-center mt-4">
          <h2 className='intro'>Peek at <a href='https://dining.umd.edu/sustainability/campus-pantry' target="_blank">UMD Pantry</a> from your  🛋️</h2>
          <h2 className='sub-intro'>Real Data. Save<span className='save-animation'> {textList[textIndex]}</span>.</h2>

          <h2 className='find-button'>
            <ScrollLink to="product" smooth={true} duration={800}>
            </ScrollLink>
            <Link className='link' to="/product">Find Now !</Link>
          </h2>
        </div>
      </Element>

      <Element name="nutrition-section">
        <Nutrition />
      </Element>
      <Footer />
    </div>
  );
};

export default Home;
