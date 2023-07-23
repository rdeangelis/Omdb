export class MovieModel {
    constructor(
        private _Title: string,
        private _Year: number,
        private _imdbID: string,
        private _Type: string,
        private _Poster: string
    ) {}

    public get Title(): string {
        return this._Title;
    }
    public set Title(value: string) {
        this._Title = value;
    }
    public get Year(): number {
        return this._Year;
    }
    public set Year(value: number) {
        this._Year = value;
    }
    public get imdbID(): string {
        return this._imdbID;
    }
    public set imdbID(value: string) {
        this._imdbID = value;
    }
    public get Type(): string {
        return this._Type;
    }
    public set Type(value: string) {
        this._Type = value;
    }
    public get Poster(): string {
        return this._Poster;
    }
    public set Poster(value: string) {
        this._Poster = value;
    }
}
