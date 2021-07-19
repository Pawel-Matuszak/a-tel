import React, {useRef} from 'react'
import { useIntersection } from "react-use"

import "./About.css"
const About = ({bgNotActive, bgActive}) => {
    const about = useRef(null)

    const aboutIntersection = useIntersection(about, {
        root: null,
        rootMargin: "40%",
        threshold: 1,
    })

    aboutIntersection && aboutIntersection.intersectionRatio < 1 
        ? bgNotActive(about.current)
        : bgActive(about.current)

    return (
        <section className="about-container" id="about" ref={about}>
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
