import { data as filmList } from './data/ListOfFilms.js'
import { data as genreList } from './data/ListOfGenres.js'
import Film from './model/Film.ts';
import Genre from './model/Genre.ts';

export async function readAll(): Promise<Film[]> {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    return filmList.map((m) => Film.fromObject(m));
}

export async function readOne(number:number):Promise<Film> {
    return Film.fromObject(filmList[number]);
}

export async function readRandomOne():Promise<Film> {
    const random = Math.floor(Math.random() * filmList.length);
    return Film.fromObject(filmList[random]);
}

export async function findById(id:string):Promise<Film> {
    return Film.fromObject(filmList.find((m) => m.id === id));
}

export async function readAllGenres(): Promise<Genre[]> {
    return genreList.map((m) => Genre.fromObject(m));
}

export async function findFilmsByGenre(genre: string):Promise<Film[]> {
    return filmList.filter((m) => m.genre === genre).map((m) => Film.fromObject(m));
}