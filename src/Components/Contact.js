import React, {useRef} from 'react'
import { useIntersection } from "react-use"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhoneAlt, faEnvelope, faHome} from "@fortawesome/free-solid-svg-icons"
import ContactForm from './ContactForm'
import './contact.css'


const Contact = ({bgNotActive, bgActive}) => {
  const contact = useRef(null)

  const contactIntersection = useIntersection(contact, {
    root: null,
    rootMargin: "20%",
    threshold: 1,
  })

  contactIntersection && contactIntersection.intersectionRatio < 1 
      ? bgNotActive(contact.current)
      : bgActive(contact.current)

  return (
    <section id="kontakt" ref={contact}>
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="section-title">Kontakt</h2>
          <ul className="contact-info-list">
            <li><FontAwesomeIcon className="fontAwesomeIcon" icon={faPhoneAlt}/><span><p>Właściciel firmy:</p> <a href="tel:+48 790 22 11 44">+48 790 22 11 44</a></span></li>
            <li><FontAwesomeIcon className="fontAwesomeIcon" icon={faPhoneAlt}/><span><p>Asystentka:</p> <a href="tel:+48 531 99 83 71">+48 531 99 83 71</a></span></li>
            <li><FontAwesomeIcon className="fontAwesomeIcon" icon={faEnvelope}/><span><p>Właściciel firmy:</p> <a href="mailto:andrzej.borzek@a-tel.com.pl">andrzej.borzek@a-tel.com.pl</a></span></li>
            <li><FontAwesomeIcon className="fontAwesomeIcon" icon={faEnvelope}/><span><p>Asystentka:</p> <a href="mailto:agnieszka.pierzga@a-tel.com.pl">agnieszka.pierzga@a-tel.com.pl</a></span></li>
            <li><FontAwesomeIcon className="fontAwesomeIcon" icon={faEnvelope}/><span><p>Biuro:</p> <a href="mailto:biuro@a-tel.com.pl">biuro@a-tel.com.pl</a></span></li>
            <li><FontAwesomeIcon className="fontAwesomeIcon" icon={faHome}/><span><a href = "https://www.google.com/maps/place/Wolno%C5%9Bci+99,+46-020+Opole/@50.737193,17.9085862,17z/data=!3m1!4b1!4m5!3m4!1s0x471051e63140a8f5:0xe62d534ba8576e6!8m2!3d50.737193!4d17.9107749" target="_blank">Wolności 99, 45-920 Opole</a></span></li>
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
