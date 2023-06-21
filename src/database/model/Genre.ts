export default class Genre {
    id: string;
    name: string;
    banner: string;

    constructor(id?: string, name?: string, banner?: string) {
        this.id = id ? id : "";
        this.name = name ? name : "";
        this.banner = banner ? banner : "";
    }

    public static fromObject(object:any):Genre {
        const genre = new Genre();
        genre.id = object.id;
        genre.name = object.name;
        genre.banner = object.banner;
        return genre;
    }
}