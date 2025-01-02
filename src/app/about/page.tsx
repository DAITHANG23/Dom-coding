/* eslint-disable @next/next/no-img-element */
import React from "react";

const About = () => {
  return (
    <div
      style={{
        height: "100vh",
        padding: "32px 16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <img
        src="https://via.placeholder.com/150"
        alt="Avatar"
        style={{ borderRadius: "50%", marginBottom: "24px" }}
      />
      <h1>About Me</h1>
      <p>
        Hello! My name is [Your Name] and I am an Information Technology
        professional. I have been working in the field for [Number of years]
        years and have experience in [Your areas of expertise, e.g. web
        development, software engineering, network administration, etc.]. I am
        constantly learning and improving my skills to stay up-to-date with the
        latest technologies and trends.
      </p>
      <p>
        Outside of work, I enjoy [Your hobbies and interests, e.g. hiking,
        playing video games, watching movies, etc.]. I also enjoy [Your relevant
        additional activities, e.g. contributing to open-source projects,
        teaching/tutoring, volunteering, etc.].
      </p>
      <p>Thank you for taking the time to learn more about me.</p>
    </div>
  );
};

export default About;
