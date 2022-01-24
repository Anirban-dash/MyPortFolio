import React from 'react';
import './style.css';
const Abilities = (props) => {
  return  <section class={`services ${props.mode?'':'temp'}`} id="services">
  <div class="max-width">
      <h2 class="title">My Abilities</h2>
      <div class="serv-content">
          <div class="card">
              <div class="box">
                  <i class="fas fa-globe"></i>
                  <div class="text">Web Development</div>
                  <p>I am working on web 2.0 technology and designed various of full stack websites.</p>
              </div>
          </div>
          <div class="card">
              <div class="box">
                  <i class="fas fa-terminal"></i>
                  <div class="text">Problem Solving</div>
                  <p>This ability helps me in different situation to overcome the problem like in data science.</p>
              </div>
          </div>
          <div class="card">
              <div class="box">
                  <i class="fas fa-code"></i>
                  <div class="text">Programming</div>
                  <p>I am using different programming languages and having little understanding of OOP</p>
              </div>
          </div>
         </div>
  </div>
</section>;
};

export default Abilities;
