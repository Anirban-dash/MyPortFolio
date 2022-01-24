import React from 'react';
import './style.css';
const Footer = () => {
  return <footer>
  <div class="footer-content">
      <h3>Anirban Dash</h3>
      <p>My Social Links</p>
      <ul class="socials">
          <li><a href="https://www.facebook.com/profile.php?id=100039254376887"><i class="fa fa-facebook"></i></a></li>  
          <li><a href="https://www.instagram.com/anirban_dash/"><i class="fa fa-instagram"></i></a></li>
          <li><a href="https://github.com/Anirban-dash"><i class="fa fa-github"></i></a></li>
          <li><a href="https://www.linkedin.com/in/anirban-dash-b91788214"><i class="fa fa-linkedin-square"></i></a></li>
      </ul>
  </div>
  <div class="footer-bottom">
      <p>copyright &copy;2022 Anirban Dash</p>
  </div>
</footer>;
};

export default Footer;
