export class MovieDto {
    constructor(
        public Title: string,
        public Year: number,
        public imdbID: string,
        public Type: string,
        public Poster: string
    ) {}
}
