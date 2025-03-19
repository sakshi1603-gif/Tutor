import React from 'react';
import styles from './Hero.module.css';
import hero from './image.jpg'

const Hero = () => {
  return (
    <section className={styles.heroSection} >
      <div className={styles.heroOverlay}></div>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Master Computer Science with <span className={styles.highlight}>Expert Tutoring</span>
            </h1>
            <p className={styles.heroSubtitle}>
              From algorithms to web development, our experienced tutors will help you excel in all areas of computer science
            </p>
            <div className={styles.heroBadges}>
              <div className={styles.badge}>
                <span className={styles.badgeNumber}>500+</span>
                <span className={styles.badgeText}>Students Taught</span>
              </div>
              <div className={styles.badge}>
                <span className={styles.badgeNumber}>15+</span>
                <span className={styles.badgeText}>CS Topics</span>
              </div>
              <div className={styles.badge}>
                <span className={styles.badgeNumber}>98%</span>
                <span className={styles.badgeText}>Success Rate</span>
              </div>
            </div>
            <div className={styles.heroCta}>
              <a href="#courses" className={styles.primaryButton}>
                Explore Courses
              </a>
              <a href="#contact" className={styles.secondaryButton}>
                Get Started <span className={styles.buttonArrow}>→</span>
              </a>
            </div>
          </div>
      </div>
    </div>
          <div>
            <img src={hero} className={styles.image}></img>
          </div>
  </section>
  );
};

export default Hero;