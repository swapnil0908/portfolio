import React from "react";
import styles from "./App.module.css";
import profilePic from "./assets/profile.jpg"; // adjust your path

const personalInfo = {
  name: "John Doe",
  title: "Software Engineer",
  summary:
    "Passionate developer with 5+ years of experience building web and mobile apps. Skilled in React, Node.js, and cloud technologies.",
  email: "john.doe@example.com",
  linkedin: "https://linkedin.com/in/johndoe",
  github: "https://github.com/johndoe",
};

const projects = [
  {
    title: "Awesome Portfolio",
    description: "Built a React portfolio website to showcase my projects.",
  },
  {
    title: "Chat App",
    description: "Real-time chat application using Socket.io and Node.js.",
  },
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
