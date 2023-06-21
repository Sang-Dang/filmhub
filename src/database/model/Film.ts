export default class Film {
    id: string;
    title: string;
    year: number;
    runtime: number;
    director: string;
    genre: string;
    banner: string;
    rating: number;
    plot: string;
    trailer: string;
    
    constructor(id?: string, title?: string, year?: number, runtime?: number, director?: string, genre?:string, banner?: string, rating?: number, plot?: string, trailer?: string) {
        this.id = id ? id : "";
        this.title = title ? title : "";
        this.year = year ? year : 0;
        this.runtime = runtime ? runtime : 0;
        this.director = director ? director : "";
        this.genre = genre ? genre : "";
        this.banner = banner ? banner : "";
        this.rating = rating ? rating : 0;
        this.plot = plot ? plot : "";
        this.trailer = trailer ? trailer : "";
    }

    public static fromObject(object:any):Film {
        const film = new Film();
        film.id = object.id;
        film.title = object.title;
        film.year = object.year;
        film.runtime = object.runtime;
        film.director = object.director;
        film.genre = object.genre;
        film.banner = this.parseImageUrl(object.banner);
        film.rating = object.rating;
        film.plot = object.plot;
        film.trailer = object.trailer;
        return film;
    }

    public static parseImageUrl(imageUrl:string):string {
        // return "./assets/img/film-banners/" + imageUrl;
        return imageUrl;
    }
}