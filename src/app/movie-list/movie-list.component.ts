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
      image : "https://i.ibb.co/yFRdfFm/interestellar.jpg",
      premiere : false,
    },
    {
      name : "About Time",
      genre : "Romance / Fantasía",
      duration : 123,
      director : "Richard Curtis",
      year : 2013,
      image : "https://i.ibb.co/Sm0wCfT/about-time.jpg",
      premiere : false,
    },
    {
      name : "Titanic",
      genre : "Romance / Drama",
      duration : 194,
      director : "James Cameron",
      year : 1997,
      image : "https://i.ibb.co/WKNDh43/titanic.jpg",
      premiere : false,
    },
    {
      name : "Avatar: El sentido del agua",
      genre : "Ciencia ficción / Acción",
      duration : 192,
      director : "James Cameron",
      year : 2022,
      image : "https://i.ibb.co/jRP3VyF/avatar-2.jpg",
      premiere : true,
    },
    {
      name : "El Rey León",
      genre : "Musical / Infantil",
      duration : 87,
      director : "Rob Minkoff y Roger Allers",
      year : 1994,
      image : "https://i.ibb.co/WncZM8p/the-lion-king.jpg",
      premiere : false,
    }
  ];

  constructor() { }
}
