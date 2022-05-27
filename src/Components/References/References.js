import React, { useRef } from "react";
import { useIntersection } from "react-use";
import Button from "../Button/Button";
import Reference from "./Reference";
import img2 from "../../Imgs/ReferenceImgs/12Atem_2011-1-min.png";
import img1 from "../../Imgs/ReferenceImgs/11Skanska_2018-1-min.png";
import img3 from "../../Imgs/ReferenceImgs/15ASkanska_2014-1-min.png";

import "./references.css";
import "../Button/button.css";
const References = ({ bgNotActive, bgActive }) => {
  const references = useRef(null);

  const referencesIntersection = useIntersection(references, {
    root: null,
    rootMargin: "40%",
    threshold: 1,
  });

  referencesIntersection && referencesIntersection.intersectionRatio < 1
    ? bgNotActive(references.current)
    : bgActive(references.current);

  return (
    <section className="references-container" id="referencje" ref={references}>
      <div className="references-title">
        <h2 className="section-title">Referencje</h2>
        <div className="rect rect1"></div>
        <div className="rect rect2"></div>
      </div>
      <div className="gallery-content references-recs">
        <Reference src={img1} />
        <Reference src={img2} />
        <Reference src={img3} />
      </div>
      <div className="references-button">
        <Button type={"a"} content={"Zobacz więcej"} link={"/galeria"} />
      </div>
    </section>
  );
};

export default References;
