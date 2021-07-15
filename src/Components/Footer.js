import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhoneAlt, faEnvelope, faHome} from "@fortawesome/free-solid-svg-icons"
import './footer.css'

const Footer = () => {

  return (
    <footer>
      <div className="footer-conatiner">
        <div className="nav">
          <h2>Przydatne linki</h2>
          <ul className="nav-links">
            <li><a href="#">Strona główna</a></li>
            <li><a href="#">Nasze usługi</a></li>
            <li><a href="#">O nas</a></li>
            <li><a href="#">Referencje</a></li>
            <li><a href="#">Kontakt</a></li>
          </ul>
        </div>
        <div className="contact">
          <h2>Kontakt</h2>
          <ul>
            <li><FontAwesomeIcon className="fontAwesomeIcon" icon={faPhoneAlt}/><span><p>Asystentka:</p> +48 531 998 371</span></li>
            <li><FontAwesomeIcon className="fontAwesomeIcon" icon={faEnvelope}/><span><p>Asystentka:</p> agnieszka.pierzga@a-tel.com.pl</span></li>
            <li><FontAwesomeIcon className="fontAwesomeIcon" icon={faEnvelope}/><span><p>Biuro:</p> biuro@a-tel.com.pl</span></li>
            <li><FontAwesomeIcon className="fontAwesomeIcon" icon={faHome}/><span>Wolności 99, 45-920 Opole</span></li>
          </ul>
        </div>
        <div className="about-us">
          <h2>O nas</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente tenetur recusandae repellendus dolores, similique quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, voluptas et dignissimos nihil labore necessitatibus?</p>
        </div>
      </div>

      <div className="copyright">
        Copyright &copy; 2021 - A-Tel Andrzej Borzek
      </div>
    </footer>
  )
}

export default Footer
