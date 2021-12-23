import React from 'react';
import '../App.css';
import { Button } from './Button/Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/assets/videos/video-1.mp4' autoPlay loop muted />
      <h1>¡Bienvenido invitado!</h1>
      <p>¿A qué estas esperando?</p>

      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' >
          VISITA MI GITLAB
        </Button>

        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={console.log('hey')} >
          DESCARGA MI CV
        </Button>
        
      </div>
      
    </div>
  );
}

export default HeroSection;
