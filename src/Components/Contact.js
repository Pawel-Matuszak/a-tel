import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhoneAlt, faEnvelope, faHome} from "@fortawesome/free-solid-svg-icons"
import ContactForm from './ContactForm'
import './contact.css'


const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="section-title">Kontakt</h2>
          <ul className="contact-info-list">
            <li><FontAwesomeIcon className="fontAwesomeIcon" icon={faPhoneAlt}/><span><p>Właściciel firmy:</p> <a href="tel:790 221 144">+48 790 221 144</a></span></li>
            <li><FontAwesomeIcon className="fontAwesomeIcon" icon={faPhoneAlt}/><span><p>Asystentka:</p> <a href="tel:531 998 371">+48 531 998 371</a></span></li>
            <li><FontAwesomeIcon className="fontAwesomeIcon" icon={faEnvelope}/><span><p>Właściciel firmy:</p> <a href="mailto:andrzej.borzek@a-tel.com.pl">andrzej.borzek@a-tel.com.pl</a></span></li>
            <li><FontAwesomeIcon className="fontAwesomeIcon" icon={faEnvelope}/><span><p>Asystentka:</p> <a href="mailto:agnieszka.pierzga@a-tel.com.pl">agnieszka.pierzga@a-tel.com.pl</a></span></li>
            <li><FontAwesomeIcon className="fontAwesomeIcon" icon={faEnvelope}/><span><p>Biuro:</p> <a href="mailto:biuro@a-tel.com.pl">biuro@a-tel.com.pl</a></span></li>
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
