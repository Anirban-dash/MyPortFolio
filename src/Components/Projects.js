import React from 'react';
import './style.css';
import project1 from './images/project-1.png';
import project2 from './images/project-2.png';
import project3 from './images/project-3.png';
import project4 from './images/project-4.png';
import project5 from './images/project-5.png';
const Projects = (props) => {
  return     <section className={`teams ${props.mode?'':'temp'}`} id="teams">
  <div className="max-width">
      <h2 className="title">My Projects</h2>
      <div className="carousel owl-carousel">
          <div className="card">
              <div className="box">
                  <img src={project1} alt=""/>
                  <div className="text">School System</div>
                  <p>This is a dynamic website using php and MySql. </p>
              </div>
          </div>
          <div className="card">
              <div className="box">
                  <img src={project2} alt=""/>
                  <div className="text">News App</div>
                  <p>This is a api based web application using React.</p>
              </div>
          </div>
          <div className="card">
              <div className="box">
                  <img src={project3} alt=""/>
                  <div className="text">Ecommerce Website</div>
                  <p>This is a full stack Ecommerce website using php and MySql.</p>
              </div>
          </div>
          <div className="card">
              <div className="box">
                  <img src={project4} alt=""/>
                  <div className="text">Portfolio</div>
                  <p>It is my Portfolio usimg React.The website where you are now</p>
              </div>
          </div>
          <div className="card">
              <div className="box">
                  <img src={project5} alt=""/>
                  <div className="text">Jokes Telling Site</div>
                  <p>An api based web app using AJAX and shows never ending jokes.</p>
              </div>
          </div>
      </div>
  </div>
</section>  ;
};

export default Projects;
