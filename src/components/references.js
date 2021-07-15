import React from 'react'
import "./References.css"
import "./button.css"
const References = () => {
    return (
        <section className="references-container" id="references">
            <div className="references-title">
                <h1>Referencje</h1>
                <div class='rect rect1'></div>
                <div class='rect rect2'></div>
            </div>
            <div className="references-recs">
                <div className="references-rec references-rec-left"></div>
                <div className="references-rec references-rec-center"></div>
                <div className="references-rec references-rec-right"></div>
                </div>
                <div className="references-button">
                    <a href= "#" className="link-btn">Zobacz więcej</a>
                </div>
        </section>
    )
}

export default References
