import React, { useRef } from "react";
import { useIntersection } from "react-use";
import equipmentImg from "../../Imgs/equipment.png";
import "./equipment.css";

const Equipment = ({ bgNotActive, bgActive }) => {
  const equipment = useRef(null);

  const equipmentIntersection = useIntersection(equipment, {
    root: null,
    rootMargin: "40%",
    threshold: 1,
  });

  equipmentIntersection && equipmentIntersection.intersectionRatio < 1
    ? bgNotActive(equipment.current)
    : bgActive(equipment.current);

  return (
    <section className="equipment-container" id="nasz-sprzet" ref={equipment}>
      <div className="left">
        <div className="equipment-title">
          <h2 className="section-title">Sprzęt</h2>
          <div className="rect rect1"></div>
          <div className="rect rect2"></div>
        </div>
        <p className="section-content">
          Zadania są realizowane własnym nowoczesnym sprzętem. Posiadamy między
          innymi spawarki światłowodowe, przyrządy miernicze, koparki i maszyny
          przeciskowe. Pozwala nam to na samodzielność w wykonywaniu kompletu
          prac.
        </p>
      </div>
      <div className="right">
        <img src={equipmentImg} alt="equipment" />
      </div>
    </section>
  );
};

export default Equipment;
