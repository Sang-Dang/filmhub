import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Slide,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect, useState } from "react";
import Film from "../../database/model/Film";
import { TransitionProps } from "@mui/material/transitions";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import YoutubeTemplate from "../template/YoutubeTemplate";
import HoverImage from "../template/HoverImage";
import { useNavigate } from "react-router-dom";

export type Props = {
  film: Film;
  open: boolean;
  handle: (state: boolean) => void;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DetailsDialog(props: Props) {
  const { film, open, handle } = props;
  const theme = useTheme();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const handleClose = () => {
    handle(false);
  };

  const handlePlayTrailer = () => {
    setIsPlaying(true);
  };

  const handlePlayFilm = (film: Film) => {
    navigate(`/watch/${film.id}`);
    handleClose();
  }

  useEffect(() => {
    setIsPlaying(false);
  }, [open]);

  const centerPlayer = isPlaying ? (
    <YoutubeTemplate link={film.trailer} />
  ) : (
    <HoverImage
      src={film.banner}
      alt={film.title}
      onClickHandler={handlePlayTrailer}
    >
      <PlayCircleFilledIcon />
    </HoverImage>
  );

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      fullScreen={fullScreen}
      maxWidth="md"
      TransitionComponent={Transition}
    >
      <DialogTitle>
        <Box display={"flex"} gap={1} alignItems={"center"}>
          {film.title}
          <Typography variant="caption">({film.year})</Typography>
        </Box>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box width="100%" height="max-height" position="relative">
          {centerPlayer}
        </Box>
        <DialogContentText>
          <Box mt={2} mb={2} display={"flex"} gap={1}>
            <Chip label={film.genre} variant="filled" />
            <Chip label={`${film.rating}/10`} variant="filled" />
            <Chip label={`${film.runtime} min`} variant="filled" />
          </Box>
          <Typography variant="body1">{film.plot}</Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant={"outlined"} onClick={handlePlayTrailer}>
          Trailer
        </Button>
        <Button variant={"contained"} onClick={() => handlePlayFilm(film)}>Play</Button>
      </DialogActions>
    </Dialog>
  );
}
