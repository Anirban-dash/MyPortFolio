import React from 'react';
import './style.css';
import project1 from './images/project-1.png';
import project2 from './images/project-2.png';
import project3 from './images/project-3.png';
import project4 from './images/project-4.png';
import project5 from './images/project-5.png';
import project6 from './images/project-6.png';
const Projects = (props) => {
  return     <section className={`teams ${props.mode?'':'temp'}`} id="teams">
  <div className="max-width">
      <h2 className="title">My Projects</h2>
      <div className="carousel owl-carousel">
          <div className="card">
              <div className="box">
                  <img src={project1} alt=""/>
                  <div className="text"><a href='https://github.com/Anirban-dash/School-Information-System'>School System</a></div>
                  <p>This is a dynamic website using php and MySql. </p>
              </div>
          </div>
          <div className="card">
              <div className="box">
                  <img src={project2} alt=""/>
                  <div className="text"><a href='https://github.com/Anirban-dash/NewsDose'>News App</a></div>
                  <p>This is a api based web application using React.</p>
              </div>
          </div>
          <div className="card">
              <div className="box">
                  <img src={project3} alt=""/>
                  <div className="text"><a href='https://github.com/Anirban-dash/Web-dev.github.io'>Ecommerce Website</a></div>
                  <p>This is a full stack Ecommerce website using php and MySql.</p>
              </div>
          </div>
          <div className="card">
              <div className="box">
                  <img src={project4} alt=""/>
                  <div className="text"><a href='https://github.com/Anirban-dash/MyPortFolio'>Portfolio</a></div>
                  <p>It is my Portfolio usimg React.The website where you are now</p>
              </div>
          </div>
          <div className="card">
              <div className="box">
                  <img src={project5} alt=""/>
                  <div className="text"><a href='https://github.com/Anirban-dash/Jokes_Website'>Jokes Telling Site</a></div>
                  <p>An api based web app using AJAX and shows never ending jokes.</p>
              </div>
          </div>
          <div className="card">
              <div className="box">
                  <img src={project6} alt=""/>
                  <div className="text"><a href='https://github.com/Anirban-dash/Quizhub'>QuizHub</a></div>
                  <p>This is a quiz giving website,where one user can create their account with their profile picture.</p>
              </div>
          </div>
      </div>
  </div>
</section>  ;
};

export default Projects;
