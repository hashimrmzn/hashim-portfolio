import React from "react";
import styles from "./TechSlider.module.css";

// React Icons
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaWordpress, FaPhp } from "react-icons/fa";
import { SiMui } from "react-icons/si";

function TechSlider() {
  const items = [
    { icon: <FaHtml5 color="#ffb400" size={50} />, alt: "HTML" },
    { icon: <FaCss3Alt color="#ffb400" size={50} />, alt: "CSS" },
    { icon: <FaJs color="#ffb400" size={50} />, alt: "JavaScript" },
    { icon: <FaBootstrap color="#ffb400" size={50} />, alt: "Bootstrap" },
    { icon: <SiMui color="#ffb400" size={50} />, alt: "MUI" },
    { icon: <FaReact color="#ffb400" size={50} />, alt: "React" },
    { icon: <FaWordpress color="#ffb400" size={50} />, alt: "WordPress" },
    { icon: <FaPhp color="#ffb400" size={50} />, alt: "PHP" },
  ];


  const loopItems = Array(10).fill(items).flat();

  return (
    <div className={styles.slider}>
      <div className={styles.sliderTrack}>
        {loopItems.map((item, index) => (
          <div className={styles.slide} key={index}>
            <div className={styles.icon}>{item.icon}</div>
            <span className={styles.label}>{item.alt}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechSlider;
