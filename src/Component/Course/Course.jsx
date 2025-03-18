import CourseCard from './CourseCard.jsx';
import styles from './Courses.module.css';

const courses = [
  { title: 'Data Structures and Algorithms', level: 'Intermediate', duration: '4 weeks' },
  { title: 'Operating Systems', level: 'Beginner', duration: '6 weeks' },
  { title: 'Database Management Systems', level: 'Advanced', duration: '5 weeks' },
  { title: 'Computer Networks', level: 'Intermediate', duration: '3 weeks' },
  { title: 'Web Development (React)', level: 'Beginner to Advanced', duration: '8 weeks' },
  { title: 'Machine Learning', level: 'Advanced', duration: '10 weeks' }
];

const Courses = () => {
  return (
    <div className={styles.courses}>
      <h1 className={styles.title}>Available Courses</h1>
      <div className={styles.grid}>
        {courses.map((course, index) => (
          <CourseCard 
            key={index}
            title={course.title}
            level={course.level}
            duration={course.duration}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
