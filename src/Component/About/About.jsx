import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <div className={styles.aboutHeader}>
          <h2 className={styles.aboutTitle}>About Our CS Tutoring</h2>
          <div className={styles.underline}></div>
        </div>
        
        <div className={styles.aboutContent}>
          <div className={styles.aboutImageContainer}>
            <div className={styles.aboutImage}>
              {/* Replace with your actual image */}
              <div className={styles.imagePlaceholder}>
                <div className={styles.codeSymbol}>&lt;/&gt;</div>
              </div>
            </div>
            <div className={styles.experienceBadge}>
              <span className={styles.years}>5+</span>
              <span className={styles.text}>Years<br/>Experience</span>
            </div>
          </div>
          
          <div className={styles.aboutTextContent}>
            <h3 className={styles.aboutSubtitle}>Guiding Students Through Complex Computer Science Concepts</h3>
            
            <p className={styles.aboutDescription}>
              Our tutoring service specializes in computer science education, offering personalized learning experiences for students at all levels. Whether you're struggling with your first programming class or preparing for advanced algorithms interviews, our expert tutors provide the guidance you need.
            </p>
            
            <div className={styles.subjectsGrid}>
              <div className={styles.subjectItem}>
                <div className={styles.subjectIcon}>
                  <span className={styles.codeIcon}>{`{ }`}</span>
                </div>
                <h4 className={styles.subjectTitle}>Data Structures</h4>
                <p className={styles.subjectDesc}>Master arrays, linked lists, trees, graphs, and more.</p>
              </div>
              
              <div className={styles.subjectItem}>
                <div className={styles.subjectIcon}>
                  <span className={styles.codeIcon}>λ</span>
                </div>
                <h4 className={styles.subjectTitle}>Algorithms</h4>
                <p className={styles.subjectDesc}>Learn sorting, searching, and optimization techniques.</p>
              </div>
              
              <div className={styles.subjectItem}>
                <div className={styles.subjectIcon}>
                  <span className={styles.codeIcon}>#</span>
                </div>
                <h4 className={styles.subjectTitle}>Programming Languages</h4>
                <p className={styles.subjectDesc}>Python, Java, C++, JavaScript, and more.</p>
              </div>
              
              <div className={styles.subjectItem}>
                <div className={styles.subjectIcon}>
                  <span className={styles.codeIcon}>@</span>
                </div>
                <h4 className={styles.subjectTitle}>Web Development</h4>
                <p className={styles.subjectDesc}>Frontend, backend, and full-stack development.</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;