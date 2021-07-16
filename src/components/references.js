import React from 'react'
import Button from "./Button"
import Reference from './Reference'
import img1 from '../ReferenceImgs/Atem_2008-1.png'
import img2 from '../ReferenceImgs/Atem_2011-1.png'
import img3 from '../ReferenceImgs/Atem_2013-1.png'

import "./References.css"
import "./button.css"
const References = () => {
    return (
        <section className="references-container" id="references">
            <div className="references-title">
                <h2 className="section-title">Referencje</h2>
                <div class='rect rect1'></div>
                <div class='rect rect2'></div>
            </div>
            <div className="gallery-content references-recs">
                <Reference src={img1}/>
                <Reference src={img2}/>
                <Reference src={img3}/>
            </div>
                <div className="references-button">
                    <Button type={"a"} content={"Zobacz więcej"} link={"/gallery"}/>
                </div>
        </section>
    )
}

export default References
