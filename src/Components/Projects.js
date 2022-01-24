import React from 'react';
import './style.css';
import project1 from './images/project-1.png';
import project2 from './images/project-2.png';
import project3 from './images/project-3.png';
import project4 from './images/project-4.png';
import project5 from './images/project-5.png';
const Projects = (props) => {
  return     <section class={`teams ${props.mode?'':'temp'}`} id="teams">
  <div class="max-width">
      <h2 class="title">My Projects</h2>
      <div class="carousel owl-carousel">
          <div class="card">
              <div class="box">
                  <img src={project1} alt=""/>
                  <div class="text">School System</div>
                  <p>This is a dynamic website using php and MySql. </p>
              </div>
          </div>
          <div class="card">
              <div class="box">
                  <img src={project2} alt=""/>
                  <div class="text">News App</div>
                  <p>This is a api based web application using React.</p>
              </div>
          </div>
          <div class="card">
              <div class="box">
                  <img src={project3} alt=""/>
                  <div class="text">Ecommerce Website</div>
                  <p>This is a full stack Ecommerce website using php and MySql.</p>
              </div>
          </div>
          <div class="card">
              <div class="box">
                  <img src={project4} alt=""/>
                  <div class="text">Portfolio</div>
                  <p>It is my Portfolio usimg React.The website where you are now</p>
              </div>
          </div>
          <div class="card">
              <div class="box">
                  <img src={project5} alt=""/>
                  <div class="text">Jokes Telling Site</div>
                  <p>An api based web app using AJAX and shows never ending jokes.</p>
              </div>
          </div>
      </div>
  </div>
</section>  ;
};

export default Projects;
