import { Component } from '@angular/core';
import { Movie } from './Movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  
  movies: Movie[] = [
    {
      name : "Interestellar",
      genre : "Ciencia ficción / Aventura",
      duration : 169,
      director : "Christopher Nolan",
      year : 2014,
      image : "assets/img/interestellar.jpg",
      premiere : false,
    },
    {
      name : "About Time",
      genre : "Romance / Fantasía",
      duration : 123,
      director : "Richard Curtis",
      year : 2013,
      image : "assets/img/about-time.jpg",
      premiere : false,
    },
    {
      name : "Titanic",
      genre : "Romance / Drama",
      duration : 194,
      director : "James Cameron",
      year : 1997,
      image : "assets/img/titanic.jpg",
      premiere : false,
    },
    {
      name : "Avatar: El sentido del agua",
      genre : "Ciencia ficción / Acción",
      duration : 192,
      director : "James Cameron",
      year : 2022,
      image : "assets/img/avatar-2.jpg",
      premiere : true,
    },
    {
      name : "El Rey León",
      genre : "Musical / Infantil",
      duration : 87,
      director : "Rob Minkoff y Roger Allers",
      year : 1994,
      image : "assets/img/the-lion-king.jpg",
      premiere : false,
    }
  ];

  constructor() { }
}
