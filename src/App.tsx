import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Header } from "./components/layout/Header";
import FilmDetailsProvider from "./context/FilmDetailsProvider";
import { Box } from "@mui/material";
import Genres from "./pages/Genres";
import GenreDetails from "./pages/GenreDetails";
import Footer from "./components/layout/Footer";
import ViewFilm from "./pages/ViewFilm";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ScrollToTop from "./util/ScrollToTop";
import Temp from "./pages/Temp";

function App() {
  return (
    <FilmDetailsProvider>
      <Box id="main" minWidth="100vw" minHeight="100vh" position="static">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/genres/:name" element={<GenreDetails />} />
          <Route path="/watch/:id" element={<ViewFilm />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/temp" element={<Temp />} />
        </Routes>
        <Footer />
      </Box>
    </FilmDetailsProvider>
  );
}

export default App;
