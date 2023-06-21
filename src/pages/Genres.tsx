import React, { useEffect, useState } from "react";
import { readAllGenres } from "../database/DatabaseHelper";
import Genre from "../database/model/Genre";
import GenreList from "../components/common/GenreList";
import { Box } from "@mui/material";

type Props = {};

export default function Genres({}: Props) {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    const getAllGenres = async () => {
      const response = await readAllGenres();
      console.log(response)
      setGenres(response);
    };

    getAllGenres();
  }, []);

  return (
    <Box p="100px 50px 0">
      <div>Genres</div>
      <GenreList genres={genres} />
    </Box>
  );
}
