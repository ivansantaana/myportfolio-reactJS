import React from 'react';
import Button from '@material-ui/core/Button';

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
          variant="outlined" 
          href="https://gitlab.com/ivansantaana"
          size="large"

        > VISITA MI GITLAB </Button>
        <Button 
          variant="contained"
          size="large"

        > DESCARGA MI CV </Button>


      </div>
    </div>
  );
}

export default HeroSection;

//<Button>VISITA MI GITLAB</Button>
// <Button>DESCARGA MI CV</Button>
