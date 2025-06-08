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
        I am a middle software engineer about developing website/app. With
        knowledge in full-stack development, I offer the best projects resulting
        in quality work. I am constantly learning and improving my skills to
        stay up-to-date with the latest technologies and trends. I am a middle
        software engineer about developing website/app. With knowledge in
        full-stack development, I offer the best projects resulting in quality
        work. I am constantly learning and improving my skills to stay
        up-to-date with the latest technologies and trends. I am a middle
        software engineer about developing website/app. With knowledge in
        full-stack development, I offer the best projects resulting in quality
        work. I am constantly learning and improving my skills to stay
        up-to-date with the latest technologies and trends. I am a middle
        software engineer about developing website/app. With knowledge in
        full-stack development, I offer the best projects resulting in quality
        work. I am constantly learning and improving my skills to stay
        up-to-date with the latest technologies and trends. I am a middle
        software engineer about developing website/app. With knowledge in
        full-stack development, I offer the best projects resulting in quality
        work. I am constantly learning and improving my skills to stay
        up-to-date with the latest technologies and trends.
      </Typography>
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
