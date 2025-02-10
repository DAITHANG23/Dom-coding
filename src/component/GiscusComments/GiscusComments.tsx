"use client";

import Giscus from "@giscus/react";
import { useTheme } from "@mui/material";

export default function GiscusComments() {
  const theme = useTheme();
  return (
    <Giscus
      id="comments"
      repo="DAITHANG23/Dom-coding"
      repoId="R_kgDONFZJGQ"
      category="General"
      categoryId="DIC_kwDONFZJGc4Cm1Gx"
      mapping="specific"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={theme.palette.mode === "dark" ? "dark" : "light"}
      lang="en"
      loading="lazy"
    />
  );
}
