import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhoneAlt, faEnvelope, faHome} from "@fortawesome/free-solid-svg-icons"
import ContactForm from './ContactForm'
import './contact.css'


const Contact = () => {
  return (
    <section>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Kontakt</h2>
          <ul className="contact-info-list">
            <li><FontAwesomeIcon className="fontAwesomeIcon" icon={faPhoneAlt}/><span><p>Właściciel firmy:</p> +48 790 221 144</span></li>
            <li><FontAwesomeIcon className="fontAwesomeIcon" icon={faPhoneAlt}/><span><p>Asystentka:</p> +48 531 998 371</span></li>
            <li><FontAwesomeIcon className="fontAwesomeIcon" icon={faEnvelope}/><span><p>Właściciel firmy:</p> andrzej.borzek@a-tel.com.pl</span></li>
            <li><FontAwesomeIcon className="fontAwesomeIcon" icon={faEnvelope}/><span><p>Asystentka:</p> agnieszka.pierzga@a-tel.com.pl</span></li>
            <li><FontAwesomeIcon className="fontAwesomeIcon" icon={faEnvelope}/><span><p>Biuro:</p> biuro@a-tel.com.pl</span></li>
            <li><FontAwesomeIcon className="fontAwesomeIcon" icon={faHome}/><span>Wolności 99, 45-920 Opole</span></li>
          </ul>
        </div>
        <div className="contact-form">
          <ContactForm/>          
        </div>
        
      </div>
    </section>
  )
}

export default Contact
