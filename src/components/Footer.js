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
          
          <div class='politics'>
            <small class='website-rights'> Copyright © 2021 - Iván Santana Calle </small>
            <p><a className="conditions" href="../pdfs/reporte2-05-10.pdf" download="Reporte2Mayo2010"> Condiciiones De Uso </a></p>
            <p><a className="conditions" href="../pdfs/reporte2-05-10.pdf" download="Reporte2Mayo2010"> Condiciones Generales De Contratación </a></p>
            <p><a className="conditions" href="../pdfs/reporte2-05-10.pdf" download="Reporte2Mayo2010"> Política de Cookies </a></p>
            <p><a className="conditions" href="../pdfs/reporte2-05-10.pdf" download="Reporte2Mayo2010"> Política De Privacidad Redes Sociales </a></p>

          </div>
          <div class='social-icons'>
            <Link class='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'> <i class='fab fa-facebook-f' /> </Link>
            <Link class='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'> <i class='fab fa-instagram' /> </Link>
            <Link class='social-icon-link youtube' to='/' target='_blank' aria-label='Youtube'> <i class='fab fa-youtube' /> </Link>
            <Link class='social-icon-link twitter' to='/' target='_blank' aria-label='Twitter'> <i class='fab fa-twitter' /> </Link>
            <Link class='social-icon-link twitter' to='/' target='_blank' aria-label='LinkedIn'> <i class='fab fa-linkedin' /> </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

//             <a href="../pdfs/reporte2-05-10.pdf" download="Reporte2Mayo2010"> Descargar Archivo </a>
// para descargar archivos pdf de las políticas