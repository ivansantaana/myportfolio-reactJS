import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'> IV </Link>
          </div>

          <small class='website-rights'>IV © 2022</small>
          
          <div class='social-icons'>
            <a class="social-icon-link facebook"href="https://www.facebook.com/ivansantaanacalle/" target="_blank"><i class='fab fa-facebook-f' /></a>
            <a class="social-icon-link instagram"href="https://www.instagram.com/ivansantaana_/" target="_blank"><i class='fab fa-instagram' /></a>
            <a class="social-icon-link youtube"href="https://www.youtube.com/channel/UC3FUJix8bb3Bf0y7Cd0EopA" target="_blank"><i class='fab fa-youtube' /></a>
            <a class="social-icon-link linkedin"href="https://www.linkedin.com/in/ivan-santana-calle/" target="_blank"><i class='fab fa-linkedin' /></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;