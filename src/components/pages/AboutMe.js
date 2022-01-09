import React from 'react';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <div className='AboutMeScreen'>
        <img className='background' src= {require("./AboutMeAssets/banner.gif")}/>

      <div className='resume'>
        
        <div className='avatar_box'>
          <text className='name_surname'>IVÁN SANTANA</text> <br></br>
          <text className='job'>Front-end developer</text>
        </div>
        <figure className='resume_image'>
          <img className='avatar' src={require("./AboutMeAssets/avatar.jpg")} alt=""/>
        </figure>

      <div className='resume_information'>

      </div>
      </div>
    </div>
  );
}