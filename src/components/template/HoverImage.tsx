import { Box } from "@mui/material";
import React from "react";

type Props = {
  src: string;
  alt: string;
  children: React.ReactNode;
  onClickHandler: () => void;
};

export default function HoverImage({
  src,
  alt,
  children,
  onClickHandler,
}: Props) {
  return (
    <>
      <Box
        component="img"
        src={src}
        alt={alt}
        width="100%"
        height="100%"
        sx={{ objectFit: "contain" }}
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        onClick={onClickHandler}
        sx={{
          cursor: "pointer",
          opacity: "0",
          backgroundColor: "rgba(0,0,0,0.5)",
          transition: "all 0.2s linear",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "&:hover": {
            opacity: "1",
          },
          "&:active": {
            "&>*": {
              transform: "rotate(360deg) scale(.9)",
            },
          },
          "&>*": {
            fontSize: "5rem",
            color: "white",
            opacity: "0.5",
            transition: "all 0.2s linear",
          },
        }}
      >
        {children}
      </Box>
    </>
  );
}
