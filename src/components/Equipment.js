import React from 'react'
import "./equipment.css"

const Equipment = ({passRef}) => {
    return (
        <section className="equipment-container" id="equipment" ref={passRef}>
            <div className="right">
                <div className="equipment-title">
                    <h2 className="section-title">Sprzęt</h2>
                    <div class='rect rect1'></div>
                    <div class='rect rect2'></div>
                </div>
                <p className="section-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat repellendus assumenda corporis illo! Repellat accusamus perspiciatis inventore dolores, eligendi asperiores. Labore autem ut, recusandae architecto iure nihil maxime fugiat id necessitatibus temporibus, ratione at nulla, earum natus perferendis. Dolore voluptatibus quibusdam aspernatur nemo quidem aperiam placeat labore quam? Tempore, doloribus!</p>
            </div>
            <div className="left">
            </div>
        </section>
    )
}

export default Equipment
