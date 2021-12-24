import React from 'react';
import { Button } from 'react-bootstrap';

import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/assets/videos/video-1.mp4' autoPlay loop muted />
      <h1>¡Bienvenido internauta!</h1>
      <p>¿A qué estas esperando?</p>

      <div className='hero-btns'>
        <Button 
          variant="outline-primary"
          href="https://gitlab.com/ivansantaana"
          > 
          VISIT MY GITLAB 
        </Button>

        <Button 
          variant="primary"
          >
          DOWNLOAD MY CV
        </Button>
      </div>
      
    </div>
  );
}

export default HeroSection;
