import React, { useEffect, useState } from "react";
import ContactForm from "../components/common/ContactForm";
import { Box, Typography } from "@mui/material";
import { readAllGenres } from "../database/DatabaseHelper";
import Genre from "../database/model/Genre";

type Props = {};

export default function Contact({}: Props) {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const response = await readAllGenres();
      setGenres(response);
    };

    fetchGenres();
  }, []);

  return (
    <>
      <Box
        component="img"
        src="https://unblast.com/wp-content/uploads/2021/01/Space-Background-Image-3.jpg"
        alt=""
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        zIndex="-5"
        sx={{
          opacity: 0.18,
          transform: "translateY(-50px)",
          filter: "blur(2px)",
        }}
      />
      <Box
        mt={10}
        height="100%"
        width="100%"
        display="flex"
        justifyContent="center"
        flexDirection="column"
        p="0 50px"
      >
        <Typography
          variant="h3"
          color="textSecondary"
          textAlign="center"
          mb={3}
        >
          Contact us
        </Typography>
        <ContactForm genres={genres} />
      </Box>
    </>
  );
}
