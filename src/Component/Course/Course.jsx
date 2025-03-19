// Courses.jsx
import React from 'react';
import styles from './Courses.module.css';
import image from './image1.jpg'

const Courses = () => {
  const courseData = [
    {
      id: 1,
      title: "Introduction to Programming",
      description: "Learn the fundamentals of programming with Python. Perfect for beginners with no prior coding experience.",
      level: "Beginner",
      duration: "8 weeks",
      topics: ["Variables & Data Types", "Control Flow", "Functions", "Basic Data Structures"],
      image: "/images/intro-programming.jpg"
    },
    {
      id: 2,
      title: "Data Structures & Algorithms",
      description: "Master essential data structures and algorithms. Improve your problem-solving skills and prepare for technical interviews.",
      level: "Intermediate",
      duration: "10 weeks",
      topics: ["Arrays & Linked Lists", "Trees & Graphs", "Sorting Algorithms", "Dynamic Programming"],
      image: "/images/dsa.jpg"
    },
    {
      id: 3,
      title: "Web Development Fundamentals",
      description: "Build responsive websites with HTML, CSS, and JavaScript. Learn modern web development practices.",
      level: "Beginner to Intermediate",
      duration: "12 weeks",
      topics: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation", "Responsive Design"],
      image: "/images/web-dev.jpg"
    },
    {
      id: 4,
      title: "Advanced React Development",
      description: "Take your React skills to the next level. Learn hooks, context API, and state management.",
      level: "Advanced",
      duration: "8 weeks",
      topics: ["React Hooks", "Context API", "Redux", "Performance Optimization", "Testing"],
      image: "/images/react-dev.jpg"
    },
    {
      id: 5,
      title: "Database Systems",
      description: "Understand database design principles and implementation. Work with SQL and NoSQL databases.",
      level: "Intermediate",
      duration: "6 weeks",
      topics: ["Relational Database Design", "SQL", "MongoDB", "Database Optimization"],
      image: "/images/database.jpg"
    },
    {
      id: 6,
      title: "Machine Learning Fundamentals",
      description: "Introduction to machine learning concepts and applications. Implement basic ML algorithms.",
      level: "Intermediate to Advanced",
      duration: "10 weeks",
      topics: ["Supervised Learning", "Unsupervised Learning", "Neural Networks", "Model Evaluation"],
      image: "/images/machine-learning.jpg"
    }
  ];

  return (
    <section className={styles.coursesSection} id="course">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our CS Courses</h2>
        <p className={styles.sectionDescription}>
          Comprehensive computer science tutoring tailored to your learning needs.
          From programming basics to advanced topics, we've got you covered.
        </p>

        <div className={styles.courseGrid}>
          {courseData.map((course) => (
            <div key={course.id} className={styles.courseCard}>
              <div className={styles.courseImageContainer}>
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className={styles.courseImage} 
                />
                <div className={styles.courseLevel}>{course.level}</div>
              </div>
              <div className={styles.courseContent}>
                <h3 className={styles.courseTitle}>{course.title}</h3>
                <p className={styles.courseDuration}>
                  <span className={styles.durationIcon}>⏱️</span> {course.duration}
                </p>
                <p className={styles.courseDescription}>{course.description}</p>
                <div className={styles.topicsContainer}>
                  <h4 className={styles.topicsHeading}>Topics covered:</h4>
                  <ul className={styles.topicsList}>
                    {course.topics.map((topic, index) => (
                      <li key={index} className={styles.topicItem}>{topic}</li>
                    ))}
                  </ul>
                </div>
                <button className={styles.enrollButton}>Enroll Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;