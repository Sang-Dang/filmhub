import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Grid,
  Box,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type Props = {};

export default function About({}: Props) {
  return (
    <Box mt={10}>
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
        sx={{opacity: 0.15, transform: "translateY(-50px)", filter: "blur(2px)"}}
      />
      <Typography variant="h3" color="textSecondary" textAlign="center" mb={3}>
        About us
      </Typography>
      <Grid
        container
        spacing={2}
        p="0 50px"
        width={{ sx: "100%", md: "50%" }}
        m="0 auto"
      >
        <Grid item md={12}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Our Mission</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                At our movie website, our mission is to provide a seamless and
                enjoyable online movie-watching experience. We strive to offer a
                vast collection of movies across various genres, ensuring that
                every user finds something they love.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item md={12}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>User-Friendly Interface</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We have designed our website with a user-friendly interface,
                making it easy for visitors to navigate and discover movies.
                With intuitive search and browsing features, you can quickly
                find the movies you want to watch.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item md={12}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>High-Quality Streaming</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Experience movies in high-quality streaming. Our website offers
                movies in HD and even higher resolutions, allowing you to enjoy
                a cinematic experience from the comfort of your home. Get
                immersed in the captivating visuals and crisp audio.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item md={12}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Personalized Recommendations</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Discover new movies tailored to your preferences. Our website
                utilizes advanced algorithms to provide personalized movie
                recommendations based on your watch history and ratings. Explore
                a world of movies you're likely to enjoy.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item md={12}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Accessible Anytime, Anywhere</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Enjoy movies on your schedule. Our website is accessible 24/7,
                allowing you to watch movies at any time and from any device.
                Whether you're at home, on the go, or traveling, you can dive
                into a movie whenever you want.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item md={12}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Safe and Secure</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We prioritize the safety and security of our users. Our website
                ensures secure and encrypted connections for all transactions
                and user data. You can browse, stream, and interact with peace
                of mind, knowing that your privacy is protected.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item md={12}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Movie Recommendations by Experts</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Discover handpicked movie recommendations by our team of
                experts. We curate a selection of must-watch movies from various
                genres and eras, ensuring that you have access to critically
                acclaimed and fan-favorite films.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item md={12}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Community and User Reviews</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Join our vibrant movie community! Engage with fellow movie
                enthusiasts, share your thoughts, and read user reviews. Get
                recommendations, discuss movie trivia, and be a part of a
                passionate community of movie lovers.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item md={12}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Exclusive Content and Special Features</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Unlock exclusive content and special features on our website.
                Gain access to behind-the-scenes footage, director's commentary,
                interviews, and deleted scenes. Dive deeper into the
                movie-watching experience with our exclusive content.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item md={12}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Multi-Device Compatibility</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Enjoy seamless movie streaming across multiple devices. Our
                website is compatible with a wide range of devices, including
                smartphones, tablets, smart TVs, and computers. Switch between
                devices and continue watching your favorite movies without
                interruption.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Box>
  );
}
