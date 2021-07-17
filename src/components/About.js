import React from 'react'
import "./About.css"
const About = ({passRef}) => {
    return (
        <section className="about-container" id="about" ref={passRef}>
            <div className="left">
            </div>
            <div className="right">
                <div className="about-title">
                <h2 className="section-title">O nas</h2>
                <div class='rect rect1'></div>
                <div class='rect rect2'></div>
                </div>
                <p className="section-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat repellendus assumenda corporis illo! Repellat accusamus perspiciatis inventore dolores, eligendi asperiores. Labore autem ut, recusandae architecto iure nihil maxime fugiat id necessitatibus temporibus, ratione at nulla, earum natus perferendis. Dolore voluptatibus quibusdam aspernatur nemo quidem aperiam placeat labore quam? Tempore, doloribus!</p>
            </div>
        </section>
    )
}

export default About
