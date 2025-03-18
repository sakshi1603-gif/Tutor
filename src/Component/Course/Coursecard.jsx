import styles from './Coursescard.module.css';

const CourseCard = ({ title, level, duration }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.level}>Level: {level}</p>
      <p className={styles.duration}>Duration: {duration}</p>
      <button className={styles.button}>Enroll Now</button>
    </div>
  );
};

export default CourseCard;
