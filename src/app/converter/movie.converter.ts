import { Injectable } from "@angular/core";
import { MovieDto } from "../dto/movie.dto";
import { MovieModel } from "../model/movie.model";

@Injectable({
    providedIn: 'root'
  })
export class MovieConverter {
    convertToModel(dto: MovieDto): MovieModel {
        return new MovieModel(
            dto.Title,
            dto.Year,
            dto.imdbID,
            dto.Type,
            dto.Poster
        );
    }
    convertToDto(model: MovieModel): MovieDto {
        return new MovieDto(
            model.Title,
            model.Year,
            model.imdbID,
            model.Type,
            model.Poster
        );
    }

    convertToModelList(dtoList: MovieDto[]): MovieModel[] {
        const movieList: MovieModel[] = [];

        dtoList.forEach(dto => {
            movieList.push(
                new MovieModel(
                    dto.Title,
                    dto.Year,
                    dto.imdbID,
                    dto.Type,
                    dto.Poster 
                )
            )
        });

        return movieList;
    }
}
