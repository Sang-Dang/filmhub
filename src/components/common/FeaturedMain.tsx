import React, { useContext, useState } from "react";
import FeaturedTemplate from "../template/FeaturedTemplate";
import { Typography, Box, Button } from "@mui/material";
import Film from "../../database/model/Film";
import InfoIcon from "@mui/icons-material/Info";
import ReadMore from "../layout/ReadMore";
import { detailsDialogBox } from "../../context/FilmDetailsProvider";
import { useNavigate } from "react-router-dom";

type Props = {
  film: Film;
};

export default function FeaturedMain({ film }: Props) {

  const navigate = useNavigate();

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const { handleOpen } = useContext(detailsDialogBox);

  const handleOpenDetails = (current: Film): void => {
    handleOpen(current);
  };

  const handlePlayTrailer = () => {
    setIsPlaying(true);
  };

  const handlePlayFilm = (film: Film) => {
    navigate(`/watch/${film.id}`);
  }

  return (
    <FeaturedTemplate film={film} isPlaying={isPlaying}>
      <Typography
        variant="h4"
        mb={2}
        fontWeight={900}
        sx={{ display: { xs: "none", md: "block" } }}
      >
        {film.title}
      </Typography>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <ReadMore maxChar={350}>{film.plot}</ReadMore>
      </Box>
      <Box display="flex" gap="1rem" mt={1.5} width="100%">
        <Button
          variant="contained"
          sx={{ display: { md: "block" }, width: { xs: "50%", md: "auto" } }}
          onClick={() => handlePlayFilm(film)}
        >
          Play
        </Button>
        <Button
          variant="outlined"
          onClick={handlePlayTrailer}
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          Trailer
        </Button>
        <Button
          variant="contained"
          onClick={() => handleOpenDetails(film)}
          sx={{
            display: {
              md: "flex",
            },
            gap: ".5rem",
            opacity: "0.8",
            bgcolor: "black",
            color: "white",
            "&:hover": {
              backgroundColor: "black",
            },
            width: { xs: "50%", md: "auto" }
          }}
        >
          <InfoIcon />
          <Typography
            variant="body2"
            sx={{ textDecoration: "none", color: "white" }}
          >
            More Info
          </Typography>
        </Button>
      </Box>
    </FeaturedTemplate>
  );
}
