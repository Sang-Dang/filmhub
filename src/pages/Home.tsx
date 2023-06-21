import React, { useEffect, useState } from "react";
import { readAll, readRandomOne } from "../database/DatabaseHelper";
import Film from "../database/model/Film";
import FilmList from "../components/common/FilmList";
import FeaturedMain from "../components/common/FeaturedMain";

type Props = {};

export default function Home({}: Props) {
  const [featured, setFeatured] = useState<Film>(new Film());
  const [filmList, setFilmList] = useState<Film[]>([]);

  useEffect(() => {
    const fetchFilmList = async () => {
      const filmList = await readAll();
      setFilmList(filmList);
    };

    fetchFilmList();
  }, []);

  useEffect(() => {
    const fetchFilm = async () => {
      const film = await readRandomOne();
      setFeatured(film);
    };

    fetchFilm();
  }, []);

  return (
      <div id="home">
        <FeaturedMain film={featured} />
        <FilmList list={filmList.filter((film) => film.id !== featured.id)} title="Featured" />
      </div>
  );
}
