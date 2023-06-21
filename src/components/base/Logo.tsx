import { Box, Typography } from "@mui/material";
import React from "react";

type Props = {
  size: number;
};

export default function Logo({ size }: Props) {

	const fontSize:string = `${size}px`;
	const gapSize:string = `${size/10}px`;
	const paddingSize:string = `${size/20}px ${size/10}px`;
	const borderRadiusSize:string = `${size/20 + 2}px`;
  
  return (
    <Box display="inline-flex" alignItems="center" gap={gapSize} bgcolor="transparent" borderRadius={borderRadiusSize} sx={{userSelect: "none", cursor: "pointer"}}>
      <Typography color="white" fontWeight="900" letterSpacing="1px" fontSize={fontSize}>
        Orchid
      </Typography>
      <Typography
        bgcolor={theme => theme.palette.primary.main}
        color="initial"
        p={paddingSize}
        borderRadius={borderRadiusSize}
        fontWeight="900"
        letterSpacing="1px"
				fontSize={fontSize}
      >
        Hub
      </Typography>
    </Box>
  );
}
