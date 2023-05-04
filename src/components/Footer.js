import React from 'react'
import { social } from '../social'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className='site-footer'>
      <footer>
        <div className='footer-container'>
          <div className='footer-col'>
            <h3>À propos de nous</h3>
            <p>
              Nous sommes un magasin de téléphonie mobile spécialisé dans la
              fourniture de dispositifs mobiles et d'accessoires de haute
              qualité à nos clients."
            </p>
          </div>
          <div className='footer-col'>
            <h3>Contactez-nous</h3>
            <p>Senegal ,Thiaroy</p>
            <p>Phone: (221)777618072 </p>
            <p>Email: info@phonestore.com</p>
          </div>
          <div className='footer-col'>
            <h3>Suivez-nous</h3>
            <ul className='social-links'>
              {social.map((link) => {
                const { url, icon, id } = link
                return (
                  <li key={id}>
                    <Link to={url} className='social-link'>
                      {icon}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className='footer-bottom'>
          <p>&copy; {currentYear} by adamadiouf2017@gmail.com.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
