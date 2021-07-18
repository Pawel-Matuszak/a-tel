import React from 'react'
import "./services.css"
import img1 from "../ServicesIcons/kabel_sieci_telekomunikacyjnej.png"
import img2 from "../ServicesIcons/kabel_optotelekominikacyjny.png"
import img3 from "../ServicesIcons/urzadzenie_transmicji_cyfrowej.png"
import img4 from "../ServicesIcons/kanalizacja_wtórna.png"
import img5 from "../ServicesIcons/rurociagi_kablowe.png"
import img6 from "../ServicesIcons/kanalizacja_pierwotna.png"
import img7 from "../ServicesIcons/doradztwo_techniczne.png"
import img8 from "../ServicesIcons/inwestycja.png"
import img9 from "../ServicesIcons/portfolio.png"
const Services = () => {
    return (
        <section className="offer-container" id="services">
            <div className="offer-title">
                <h2 className="section-title">Nasze usługi</h2>
                <div class='rect rect1'></div>
                <div class='rect rect2'></div>
            </div>
            <div className="icons-container">
                <div className="icon-circle-container">
                    <div className="icon-circle">
                        <img src={img1} alt="" className="icon"/>
                    </div>
                    <div className="icon-text">
                        <h2>Budowa kabli sieci telekomunikacyjnych</h2>
                    </div>
                 </div>
                <div className="icon-circle-container">
                    <div className="icon-circle">
                        <img src={img2} alt="" className="icon"/>
                    </div>
                    <div className="icon-text">
                        <h2>Budowa kabli optotelekomunikacyjnych</h2>
                    </div>
                 </div>
                <div className="icon-circle-container">
                    <div className="icon-circle">
                        <img src={img3} alt="" className="icon"/>
                    </div>
                    <div className="icon-text">
                        <h2>Montaż i konserwacja central i urządzeń transmisyjnych cyfrowych i analogowych</h2>
                    </div>
                 </div>
                <div className="icon-circle-container">
                    <div className="icon-circle">
                        <img src={img4} alt="" className="icon"/>
                    </div>
                    <div className="icon-text">
                        <h2>Budowa kanalizacji wtórnej dla linii optotelekomunikacyjnych</h2>
                    </div>
                 </div>
                <div className="icon-circle-container">
                    <div className="icon-circle">
                        <img src={img5} alt="" className="icon"/>
                    </div>
                    <div className="icon-text">
                        <h2>Budowa rurociągów kablowych dla linii optotelekomunikacyjnych</h2>
                    </div>
                 </div>
                <div className="icon-circle-container">
                    <div className="icon-circle">
                        <img src={img6} alt="" className="icon smaller-icon"/>
                    </div>
                    <div className="icon-text">
                        <h2>Budowa kanalizacji pierwotnej</h2>
                    </div>
                 </div>
                <div className="icon-circle-container">
                    <div className="icon-circle">
                        <img src={img7} alt="" className="icon smaller-icon"/>
                    </div>
                    <div className="icon-text">
                        <h2>Doradztwo techniczne związane z sieciami teletechnicznymi</h2>
                    </div>
                 </div>
                <div className="icon-circle-container">
                    <div className="icon-circle">
                        <img src={img8} alt="" className="icon"/>
                    </div>
                    <div className="icon-text">
                        <h2>Nadzory inwestorskie nad realizacja zadań teletechnicznych</h2>
                    </div>
                 </div>
                <div className="icon-circle-container">
                    <div className="icon-circle">
                        <img src={img9} alt="" className="icon"/>
                    </div>
                    <div className="icon-text">
                        <h2>Oferujemy obsługę formalnoprawna oraz projekty do wymienionych zadań</h2>
                    </div>
                 </div>
            </div>
        </section>
    )
}

export default Services
