import React from 'react';
import './style.css';
const Footer = () => {
  return <footer>
  <div className="footer-content">
      <h3>Anirban Dash</h3>
      <p>My Social Links</p>
      <ul className="socials">
          <li><a href="https://www.facebook.com/profile.php?id=100039254376887" rel="noreferrer" target="_blank"><i className="fa fa-facebook"></i></a></li>  
          <li><a href="https://www.instagram.com/anirban_dash/" rel="noreferrer" target="_blank"><i className="fa fa-instagram"></i></a></li>
          <li><a href="https://github.com/Anirban-dash" rel="noreferrer" target="_blank"><i className="fa fa-github"></i></a></li>
          <li><a href="https://www.linkedin.com/in/anirban-dash-b91788214" rel="noreferrer" target="_blank"><i className="fa fa-linkedin-square"></i></a></li>
          <li><a href="https://wa.me/+916297906377" rel="noreferrer" target="_blank"><i className="fa fa-whatsapp"></i></a></li>
      </ul>
  </div>
  <div className="footer-bottom">
      <p>copyright &copy;2022 Anirban Dash | Designed by Anirban Dash</p>
  </div>
</footer>;
};

export default Footer;
