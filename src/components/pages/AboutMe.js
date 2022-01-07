import React from 'react';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <view>
      <img className='avatar' src= {require("./AboutMeAssets/AboutMeBanner.png")}/>
      <h1 className='about'>About me</h1>
    </view>

  );
}
