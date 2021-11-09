import React from 'react';
import '../App.css';
import { Button } from './Button/Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/assets/videos/video-1.mp4' autoPlay loop muted />
      <h1>Welcome guest!</h1>
      <p>What are you waiting for?</p>

      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' >
          VISIT MY GITLAB
        </Button>

        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={console.log('hey')} >
          COSITAS VARIAS
        </Button>
        
      </div>
      
    </div>
  );
}

export default HeroSection;
