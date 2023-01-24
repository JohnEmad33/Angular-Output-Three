import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../Services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}

  movies: {
    id: number;
    name: string;
    author: string;
    duration: number;
    type: string;
    price: number;
    ratings: number;
    image: string;
    description: string;
  }[] = [];

  ngOnInit() {
    this.movies = this.moviesService.movies;
  }

  getTotalMovies() {
    return this.movies.length;
  }
  getTotalFreeMovies() {
    return this.movies.filter((movie) => movie.type === 'Free').length;
  }
  getTotalPremiumMovies() {
    return this.movies.filter((movie) => movie.type === 'Premium').length;
  }

  movieCountRadioButton: string = 'All';
  searchText: string = '';

  onFilterRadioButtonChanged(data: string) {
    this.movieCountRadioButton = data;
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }
}
