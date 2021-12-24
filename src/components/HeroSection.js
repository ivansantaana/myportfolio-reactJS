import React from 'react';
import styled from 'styled-components';

import '../App.css';
import './HeroSection.css';

const theme = {
  white: {
    default: '#3f51b5',
    hover: '#283593'
  }
}


const Button = styled.button`
  background: transparent;
  color: white;
  padding: 15px 29px;
  border-radius: 2px;
  text-transform: uppercase; 
  border: 1px solid white;
  margin: 0.5em 1em;
  cursor: pointer;
  transition: ease background-color 250ms;
`

export default function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/assets/videos/video-1.mp4' autoPlay loop muted />
      <h1>¡Bienvenido internauta!</h1>
      <p>¿A qué estas esperando?</p>

      <div className='hero-btns'>
        <a href="https://gitlab.com/ivansantaana" target="_blank">
          <Button> VISITA MI GITLAB </Button>
        </a>

        
          <Button theme="white">DESCARGA MI CV</Button>

      </div>
    </div>
  );
}