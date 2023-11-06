import React from 'react';
import  NavBar  from '../components/design/organism/navbar';
import PainelHero from './painel-hero';

export const Home = () => {
  
  return (
    <main className="row bg-dark text-light">
        <NavBar/>
        <PainelHero />
    </main>
  );
};



 