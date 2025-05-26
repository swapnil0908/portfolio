import React from "react";
import styles from "./App.module.css";
import profilePic from "./assets/profile.jpg"; // adjust your path

const personalInfo = {
  name: "Swapnil Kharche",
  title: "Software Engineer",
  summary:
    "Software engineer with expertise in wafer scheduling, system integration, and cloud-based solutions. Strong background in planning and aligning engineering work with business priorities. Experienced in C++, Java, and automation, with a history of cross-team collaboration at Applied Materials and consulting firms.",
  email: "swapnil9.kharche.com",
  linkedin: "https://www.linkedin.com/in/swapnil-kharche-09/",
  github: "https://github.com/swapnil0908",
};

const projects = [
  {
    title: "Kinect based posture detection",
    description: "This project uses the Kinect v2 sensor and skeleton tracking algorithms for real-time human pose estimation. It employs techniques like inverse kinematics and machine learning to capture full-body posture and joint movements. Designed for motion capture, activity recognition, and human-computer interaction, it handles complex poses, body constraints, and dynamic backgrounds. The framework is extendable for gait analysis and long-term tracking.",
    github: "https://github.com/swapnil0908/Kinect-Skeleton-Tracking"
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React and styled components.",
    github: "https://github.com/yourusername/portfolio"
  },
  {
    title: "Task Manager",
    description: "A full-stack to-do list with Node.js, Express, and MongoDB.",
    github: "https://github.com/yourusername/task-manager"
  }
];

export default function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img
          src={profilePic}
          alt={`${personalInfo.name} profile`}
          className={styles.profileImage}
        />
        <div className={styles.nameTitle}>
          <h1>{personalInfo.name}</h1>
          <p>{personalInfo.title}</p>
        </div>
      </header>

      <section className={styles.summary}>
        <p>{personalInfo.summary}</p>

        <div className={styles.contactLinks}>
          <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={personalInfo.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
          href="/resume.pdf"
          download
          className={styles.downloadButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
        </div>
      </section>

      <section className={styles.projects}>
        <h2>Projects</h2>
        {projects.map(({ title, description }) => (
          <div key={title} className={styles.projectCard}>
            <h3 className={styles.projectTitle}>{title}</h3>
            <p className={styles.projectDescription}>{description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
