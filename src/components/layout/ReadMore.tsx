import { Button, Chip, Typography } from "@mui/material";
import React, { useState } from "react";

type Props = {
  children: React.ReactNode;
  maxChar: number;
};

export default function ReadMore({ children, maxChar }: Props) {
  const text = children === null || children === undefined ? "" : children;
  const allowedText = text.toString().slice(0, maxChar);
  const [isReadMore, setIsReadMore] = useState<boolean>(true);
  const toggleReadMore = (): void => {
    setIsReadMore(!isReadMore);
  };
  return (
    <Button variant="text" onClick={toggleReadMore} sx={{padding: "0"}}>
      <Typography variant="body1" textTransform="none" color="white" textAlign="left">{isReadMore ? allowedText + "..." : text}</Typography>
    </Button>
  );
}
