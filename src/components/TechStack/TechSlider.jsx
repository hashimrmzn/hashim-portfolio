import React from 'react';
import styles from "./TechSlider.module.css";

// Import your icons
import htmlIcon from "../../assets/images/html-icon.svg";
import cssIcon from "../../assets/images/css-icon.svg";
import jsIcon from "../../assets/images/js-icon.svg";
import bsIcon from "../../assets/images/bootstrap-icon.svg";
import muiIcon from "../../assets/images/mui-icon.svg";
import reactIcon from "../../assets/images/react-icon.svg";
function TechSlider() {
  const items = [
    { src: htmlIcon, alt: "HTML" },
    { src: cssIcon, alt: "CSS" },
    { src: jsIcon, alt: "JavaScript" },
    { src: bsIcon , alt: "Bootstrap" },
    { src: muiIcon, alt: "MUI" },
    { src: reactIcon, alt: "React" },
    
  ];
 const loopItems = Array(7).fill(items).flat();
  return (
    <div className={styles.slider}>
      <div className={styles.sliderTrack}>
        {loopItems.map((item, index) => (
          <div className={styles.slide} key={index}>
            <img
              src={item.src}
              alt={item.alt}
              className={styles.icon}
              draggable="false"
            />
            <span className={styles.label}>{item.alt}</span>
          </div>
        ))}
      </div>
    </div>

  );
}

export default TechSlider;
