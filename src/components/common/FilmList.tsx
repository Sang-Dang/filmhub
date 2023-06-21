import React, { useContext } from "react";
import Film from "../../database/model/Film";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { detailsDialogBox } from "../../context/FilmDetailsProvider";

type Props = {
  list: Film[];
  title: string;
};

export default function FilmList({ list, title }: Props) {
  const { handleOpen } = useContext(detailsDialogBox);

  const handleOpenDetails = (current: Film) => {
    handleOpen(current)
  };

  const handleMouseEnterCard = (target: any) => {
    target.target.style.cursor = "pointer";
    target.target.style.transform = "scale(1.3)";
    target.target.style.transition = "all 0.5s";
  };

  const handleMouseLeaveCard = (target: any) => {
    target.target.style.cursor = "default";
    target.target.style.transform = "scale(1)";
  };

  // build list of film cards
  const films = list.map((film) => {
    return (
      <Grid item xs={12} md={3} key={film.id}>
        <Card
          key={film.id}
          onMouseEnter={handleMouseEnterCard}
          onMouseLeave={handleMouseLeaveCard}
        >
          <CardActionArea onClick={() => handleOpenDetails(film)}>
            <CardMedia
              component="img"
              width="100%"
              height="150px"
              image={film.banner}
              alt={film.title}
              sx={{objectFit: "fill"}}
            />
          </CardActionArea>
        </Card>
      </Grid>
    );
  });

  return (
    <>
      <Box p="50px">
        <Typography variant="h6" color="white">
          {title}
        </Typography>
        <Grid container spacing={2}>
          {films}
        </Grid>
      </Box>
    </>
  );
}
