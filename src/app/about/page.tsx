/* eslint-disable @next/next/no-img-element */

import React from "react";
import { Metadata } from "next";
import { Box } from "@mui/material";

export const metadata: Metadata = {
  title: "About Me | DomCoding",
  description: "Introduce myself and my work.",
  openGraph: {
    title: "About Me",
    description: "Introduce myself and my work.",
    url: "/about",
    type: "website",
  },
};

const About = () => {
  return (
    <Box
      sx={{
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <img
        src="./images/avatar.png"
        alt="Avatar"
        style={{
          borderRadius: "50%",
          marginBottom: "24px",
          width: "184px",
          height: "184px",
        }}
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
    </Box>
  );
};

export default About;
