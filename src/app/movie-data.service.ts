import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie-list/Movie';

const URL = 'https://638a60bd4eccb986e8abb852.mockapi.io/api/v1/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>(URL);
  }
}
