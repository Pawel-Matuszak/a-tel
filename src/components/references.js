import React from 'react'
import Button from "./Button"

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
            <div className="references-recs">
                <div className="references-rec references-rec-left"></div>
                <div className="references-rec references-rec-center"></div>
                <div className="references-rec references-rec-right"></div>
                </div>
                <div className="references-button">
                    <Button type={"a"} content={"Zobacz więcej"}/>
                </div>
        </section>
    )
}

export default References
