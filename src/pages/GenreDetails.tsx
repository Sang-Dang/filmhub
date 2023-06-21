import React, { useEffect, useState } from "react";
import { findFilmsByGenre } from "../database/DatabaseHelper";
import Film from "../database/model/Film";
import FeaturedMain from "../components/common/FeaturedMain";
import { useParams } from "react-router-dom";
import FilmList from "../components/common/FilmList";

type Props = {};

export default function GenreDetails({}: Props) {
  const name:string = useParams<{ name: string }>().name as string;

  const [films, setFilms] = useState<Film[]>([]);
  const [featured, setFeatured] = useState<Film>(new Film());

  useEffect(() => {
    const fetchGenreDetails = async () => {
      const response = await findFilmsByGenre(name);
      setFilms(response);
    };

    fetchGenreDetails();
  }, [name]);

  useEffect(() => {
    setFeatured(films[Math.floor(Math.random() * films.length)]);
  }, [films])

  return (
    <>
      <FeaturedMain film={featured} />
      <FilmList title={`Other ${name} Films`} list={films.filter((film) => film.id !== featured.id)}/>
    </>
  );
}
