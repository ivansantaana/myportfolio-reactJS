import React from 'react';

import DownloadLink from "react-download-link";
import curriculum from './curriculum.pdf'
import styled from 'styled-components';

import '../App.css';
import './HeroSection.css';

const GitlabButton = styled.button`
  display: inline-block;
  background: transparent;
  color: white;
  padding: 15px 29px;
  border-radius: 2px;
  text-transform: uppercase; 
  border: 1px solid white;
  margin: 0.5em 1em;
  cursor: pointer;
  font-size: 1em;
  transition: all .3s ease;

  &:hover {
    background: blue;
  }
`

const CVButton = styled.button`
  display: inline-block;
  background: white;
  color: black;
  padding: 15px 29px;
  border-radius: 2px;
  text-transform: uppercase; 
  border: 1px solid white;
  margin: 0.5em 1em;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background: blue;
  }
`

export default function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/assets/videos/video-1.mp4' autoPlay loop muted />
      <h1>¡Bienvenido internauta!</h1>
      <p>¿A qué estas esperando?</p>

      <div className='hero-btns'>
        <a href="https://gitlab.com/ivansantaana" target="_blank">
          <GitlabButton>VISITA MI GITLAB</GitlabButton>
        </a>
        
        <a href={curriculum} download={"curriculum.pdf"}> 
          <CVButton>DESCARGAR MI CV</CVButton></a>
      </div>
    </div>
  );
}
