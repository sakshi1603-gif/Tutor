import styles from './Hero.module.css';
import hero from './image.jpg'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1>Master Computer Science with Expert Tutors</h1>
        <p>Learn DSA, OS, DBMS, and more with personalized guidance.</p>
        <button className={styles.button}>Contact Me</button>
      </div>
      <img 
        src={hero}
        alt="Tutor" 
        className={styles.image}
      />
    </div>
  );
};

export default Hero;
