import React from 'react';
import Photo from './images/myPhoto.jpg'
import './style.css';
const About = (props) => {
  return <section class={`about ${props.mode?'':'temp'}`} id="about">
  <div class="max-width">
      <h2 class="title">About me</h2>
      <div class="about-content">
          <div class="column left">
              <img src={Photo} alt='myPhot'/>
          </div>
          <div class="column right">
              <div class="text">I'm Anirban and I'm a <br/><span class="typing-2"></span></div>
              <p>Hello viewers, this is s brief introduction of mine. I am a full stack web developer and used different technology in web development. I started my web development with PHP and MySql but later on MERN technology is becoming suitable for my full stack web development. Apart from web technologies, I am doing programming in different languages like c, c++, python, etc. I am now at learning phase and want to explore more in this field.</p>
              <a href="/">Download CV</a>
          </div>
      </div>
  </div>
</section>  
;
};

export default About;
