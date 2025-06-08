/* eslint-disable @next/next/no-img-element */

import React from "react";
import { Metadata } from "next";
import { Box, Typography } from "@mui/material";
import DividerComponent from "@/share/components/Divivder/Divider";
import "@/styles/component.css";
import MyTechnologies from "@/component/MyTechnologies/MyTechnologies";
import MyServices from "@/component/MyServices/MyServices";
import MyProjects from "@/component/MyProjects/MyProjects";
import MyAchievements from "@/component/MyAchievements/MyAchievements";
import Contacts from "@/share/components/Contacts/Contacts";
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
      }}
    >
      <h1>About Me</h1>
      <Box sx={{ textAlign: "center" }}>
        <img
          src="https://res.cloudinary.com/dn797d3j3/image/upload/v1749315968/DomCoding-Blog-Images/cd645461-0bf1-4c10-8313-390d0491d22c.png_4_pp4kku.png"
          alt="Avatar"
          style={{
            borderRadius: "50%",
            marginBottom: "24px",
            width: "211px",
            height: "211px",
            // objectFit: "cover",
          }}
        />
      </Box>

      <Typography variant="bodyL">
        Hello, I&apos;m Dom (Nguyen Dai Thang)
      </Typography>
      <Typography pt={2}>
        I&apos;m a Front-End Developer with nearly 2 years of experience in
        Front-End Web Development. I specialize in React.js, enjoy solving UI/UX
        challenges, and building scalable products. I am proactive in learning
        and applying modern technologies and best practices to become a better
        engineer. I have recently expanded my skill set to include tools and
        technologies for DevOps and backend integration such as GitHub Actions,
        Docker, Redis, and more.
        <p>
          I’m highly self-motivated and spend significant time each day learning
          and experimenting with new technologies to improve my skills and stay
          up to date with industry best practices.
        </p>
      </Typography>
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        Contact me: <Contacts />
      </div>

      <DividerComponent classes={{ root: "custom-divider-class" }} />

      <MyAchievements />

      <DividerComponent classes={{ root: "custom-divider-class" }} />

      <MyTechnologies />

      <DividerComponent classes={{ root: "custom-divider-class" }} />

      <MyServices />

      <DividerComponent classes={{ root: "custom-divider-class" }} />

      <MyProjects />
    </Box>
  );
};

export default About;
