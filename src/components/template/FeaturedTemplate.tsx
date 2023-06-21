import React, { ReactNode } from "react";
import Film from "../../database/model/Film";
import { Box } from "@mui/material";
import YoutubeTemplate from "./YoutubeTemplate";

type Props = {
  film: Film;
  children: ReactNode;
  isPlaying: boolean;
};

export default function FeaturedTemplate({ film, children, isPlaying }: Props) {
  const centerImage = isPlaying ? (
    <YoutubeTemplate link={film.trailer} />
  ) : (
    <Box
      component="img"
      src={film.banner}
      alt={film.title}
      width="100%"
      height="100%"
      sx={{ objectFit: "cover" }}
    />
  );

  return (
    <Box
      position="relative"
      p="50px 50px 0 50px"
      width="100%"
      height={{ xs: "200px", md: "100%" }}
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        zIndex={-2}
        sx={{ userSelect: "none" }}
        width="100%"
        height="100%"
      >
        <Box sx={{ display: "block" }} width="100%" height="100%">
          {centerImage}
        </Box>
        <Box
          position="absolute"
          bottom="0"
          sx={{
            background: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
            height: "65%",
            width: "100%",
          }}
        />
      </Box>
      <Box
        position="static"
        mt={{ xs: "120px", md: "25%" }}
        color="white"
        width={{ xs: "100%", md: "40%" }}
      >
        {children}
      </Box>
    </Box>
  );
}
