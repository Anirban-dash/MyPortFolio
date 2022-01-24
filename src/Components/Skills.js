import React from 'react';
import './style.css';
import node from './images/nodejs.png';
import mongo from './images/mongo.png';
import react from './images/react.png';
import python from './images/python.png';
import cp from './images/c-programming.png';
import cpprog from './images/cpp.png';
import html from './images/html-5.png';
import css from './images/css3.png';
import js from './images/javascript--v1.png';
import php from './images/php-logo.png'
import sql from './images/mysql-logo.png';
import java from './images/java-coffee-cup-logo--v1.png';
const Skills = (props) => {
  return  <section class={`skills ${props.mode?'':'temp'}`} id="skills">
  <div class="max-width">
      <h2 class="title">My skills</h2>
      <div class="skills-content">
          <div class="column right">
              <div class="text">My creative skills.</div>
              <div class="bars">
                  <div class="info">
                      <span><img src={node} alt='node'/></span>
                      <span>Beginner</span>
                  </div>
                  <div class="line node"></div>
              </div>
              <div class="bars">
                  <div class="info">
                      <span><img src={mongo} alt='mongo'/></span>
                      <span>Intermediate</span>
                  </div>
                  <div class="line mongo"></div>
                  
              </div>
              <div class="bars">
                  <div class="info">
                      <span><img id="rotate" src={react} alt='react'/></span>
                      <span>Intermediate</span>
                  </div>
                  <div class="line mysql"></div>
              </div>
              <div class="bars">
                  <div class="info">
                      <span><img src={python} alt='python'/></span>
                      <span>Intermediate</span>
                  </div>
                  <div class="line js"></div>
              </div>
              <div class="bars">
                  <div class="info">
                      <span><img src={cp} alt='c-prog'/></span>
                      <span>Intermediate</span>
                  </div>
                  <div class="line js"></div>
              </div>
              <div class="bars">
                  <div class="info">
                      <span><img src={cpprog} alt='cpp'/></span>
                      <span>Intermediate</span>
                  </div>
                  <div class="line mysql"></div>
              </div>
              
      </div>
          <div class="column right">
              <div class="bars">
                  <div class="info">
                      <span><img src={html} alt='html'/></span>
                      <span>Intermediate</span>
                  </div>
                  <div class="line js"></div>
                  
              </div>
              <div class="bars">
                  <div class="info">
                      <span><img src={css} alt='css'/></span>
                      <span>Beginner</span>
                  </div>
                  <div class="line php"></div>
              </div>
              <div class="bars">
                  <div class="info">
                      <span><img src={js} alt='js'/></span>
                      <span>Intermediate</span>
                  </div>
                  <div class="line js"></div>
              </div>
              <div class="bars">
                  <div class="info">
                      <span><img src={php} alt='php'/></span>
                      <span>Intermediate</span>
                  </div>
                  <div class="line php"></div>
              </div>
              <div class="bars">
                  <div class="info">
                      <span><img src={sql} alt='sql'/></span>
                      <span>Beginner</span>
                  </div>
                  <div class="line php"></div>
              </div>
              <div class="bars">
                  <div class="info">
                      <span><img src={java} alt='java'/></span>
                      <span>Basic</span>
                  </div>
                  <div class="line low"></div>
              </div>
          </div>
      
  </div>
  </div>
</section>;
};

export default Skills;
