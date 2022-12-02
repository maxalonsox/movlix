import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from './movie-list/Movie';

@Injectable({
  providedIn: 'root'
})
export class FavListService {

  private _favList: Movie[] = [];

  favList: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);

  constructor() { }

  addToFavList(movie: Movie) {
    let item: Movie = this._favList.find((aux) => aux.name == movie.name)!;
    if (!item) {
      this._favList.push({ ... movie});
    } else {
      item.seen = movie.seen;
      item.review = movie.review;
    }
    console.log(this._favList);
    this.favList.next(this._favList);
  }

  deleteFromFavList(movie: Movie) {
    let item: Movie = this._favList.find((aux) => aux.name == movie.name)!;
    if (item) {
      this._favList = this._favList.filter((item) => item.name != movie.name);
    }
    this.favList.next(this._favList);
  }
}
