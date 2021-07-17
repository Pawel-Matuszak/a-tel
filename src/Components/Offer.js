import React from 'react'
import "./offer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons"
const Offer = () => {
    return (
        <section className="offer-container">
            <div className="offer-title">
                <h2 className="section-title">Oferta</h2>
                <div class='rect rect1'></div>
                <div class='rect rect2'></div>
            </div>
            <div className="icons-container">
                <div className="icon-circle-container">
                    <div className="icon-circle">
                        <FontAwesomeIcon className="fontAwesomeIcon icon" icon={faBars}/>
                    </div>
                    <div className="icon-text">
                        <h2>Budowach kablowych sieci telekomunikacyjnych</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, placeat.</p>
                    </div>
                 </div>
                <div className="icon-circle-container">
                    <div className="icon-circle">
                        <FontAwesomeIcon className="fontAwesomeIcon icon" icon={faBars}/>
                    </div>
                    <div className="icon-text">
                        <h2>Budowach kabli optotelekomunikacyjnych</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, placeat.</p>
                    </div>
                 </div>
                <div className="icon-circle-container">
                    <div className="icon-circle">
                        <FontAwesomeIcon className="fontAwesomeIcon icon" icon={faBars}/>
                    </div>
                    <div className="icon-text">
                        <h2>Montaż i konserwacja central i urządzeń transmisyjnych cyfrowych</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, placeat.</p>
                    </div>
                 </div>
                <div className="icon-circle-container">
                    <div className="icon-circle">
                        <FontAwesomeIcon className="fontAwesomeIcon icon" icon={faBars}/>
                    </div>
                    <div className="icon-text">
                        <h2>Budowach kanalizacji wtórnej dla linii optotelekomunikacyjnych</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, placeat.</p>
                    </div>
                 </div>
                <div className="icon-circle-container">
                    <div className="icon-circle">
                        <FontAwesomeIcon className="fontAwesomeIcon icon" icon={faBars}/>
                    </div>
                    <div className="icon-text">
                        <h2>Budowach rurociągów kablowych dla linii optotelekomunikacyjnych</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, placeat.</p>
                    </div>
                 </div>
                <div className="icon-circle-container">
                    <div className="icon-circle">
                        <FontAwesomeIcon className="fontAwesomeIcon icon" icon={faBars}/>
                    </div>
                    <div className="icon-text">
                        <h2>Budowach kanalizacji pierwotnej</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, placeat.</p>
                    </div>
                 </div>
                <div className="icon-circle-container">
                    <div className="icon-circle">
                        <FontAwesomeIcon className="fontAwesomeIcon icon" icon={faBars}/>
                    </div>
                    <div className="icon-text">
                        <h2>Nadzory inwestorskie nad realizacja zadań teletechnicznych</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, placeat.</p>
                    </div>
                 </div>
                <div className="icon-circle-container">
                    <div className="icon-circle">
                        <FontAwesomeIcon className="fontAwesomeIcon icon" icon={faBars}/>
                    </div>
                    <div className="icon-text">
                        <h2>Doradztwo techniczne związane z sieciami teletechnicznymi</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, placeat.</p>
                    </div>
                 </div>
                <div className="icon-circle-container">
                    <div className="icon-circle">
                        <FontAwesomeIcon className="fontAwesomeIcon icon" icon={faBars}/>
                    </div>
                    <div className="icon-text">
                        <h2>Oferujemy obsługę formalnoprawna</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, placeat.</p>
                    </div>
                 </div>
            </div>
        </section>
    )
}

export default Offer
