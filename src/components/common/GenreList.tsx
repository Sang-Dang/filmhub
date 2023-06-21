import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Genre from "../../database/model/Genre";
import { useNavigate } from "react-router-dom";

type Props = {
  genres: Genre[];
};

export default function GenreList({ genres }: Props) {
  const navigate = useNavigate();

  const handleGenre = (name: string) => {
    navigate(`/genres/${name}`);
  };

  const genreCards = genres.map((genre, index) => {
    return (
      <Grid item key={genre.id} xs={12} md={3}>
        <Card className="customCard">
          <CardActionArea onClick={() => handleGenre(genre.name)}>
            <CardMedia
              component="img"
              src={genre.banner}
              alt={genre.name}
              height="200px"
            />
            <CardContent>
              <Typography variant="h6" color="white">
                {genre.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  });

  return (
    <Grid container spacing={2}>
      {genreCards}
    </Grid>
  );
}
