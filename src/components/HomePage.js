import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import Bio from './Bio';
import About from './About';
import Skills from './Skills';
import CardList from './CardList';

const HomePage = () => (
  <div>
    <Nav />
    <Bio />
    <About />
    <Skills />
    <CardList />
    <Footer />
  </div>
);

export default HomePage;
