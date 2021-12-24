import React from 'react';
import styled from 'styled-components';

import '../App.css';
import './HeroSection.css';

const Button = styled.button`
background: ${props => props.primary ? "white" : "transparent"};
color: ${props => props.primary ? "black" : "white"};
padding: 15px 29px;
border-radius: 2px;
text-transform: uppercase; 
border: 1px solid white;
margin: 0.5em 1em;
cursor: pointer;
font-size: 1em;
`;

export default function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/assets/videos/video-1.mp4' autoPlay loop muted />
      <h1>¡Bienvenido internauta!</h1>
      <p>¿A qué estas esperando?</p>

      <div className='hero-btns'>
        <a href="https://gitlab.com/ivansantaana" target="_blank">
          <Button>VISITA MI GITLAB</Button>
        </a>
        
        <Button primary>DESCARGA MI CV</Button>
      </div>
    </div>
  );
}