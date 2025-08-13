import React from 'react'
import styles from "./TechSlider.module.css";
function TechSlider() {
   const items = ["HTML", "CSS", "JavaScript", "React", "WordPress", "PHP"];
  return (
    <>
 <div className={styles.slider}>
      <div className={styles.sliderTrack}>
        {[...items, ...items].map((item, index) => (
          <div className={styles.slide} key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default TechSlider