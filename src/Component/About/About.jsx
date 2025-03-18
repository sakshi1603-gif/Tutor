import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.title}>About Our Platform</h1>
        <p className={styles.description}>
          Welcome to <strong>CS Tutor</strong> — your one-stop destination for mastering Computer Science subjects.  
          We connect students with experienced tutors to help them excel in subjects like DSA, OS, DBMS, and more.  
        </p>
        
        <div className={styles.benefits}>
          <div className={styles.benefitCard}>
            <h3>👩‍🏫 Expert Tutors</h3>
            <p>Learn from industry professionals with years of experience.</p>
          </div>
          <div className={styles.benefitCard}>
            <h3>📚 Personalized Learning</h3>
            <p>Get tailored guidance and study at your own pace.</p>
          </div>
          <div className={styles.benefitCard}>
            <h3>🌐 Flexible Schedule</h3>
            <p>Access courses anytime, from anywhere.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
