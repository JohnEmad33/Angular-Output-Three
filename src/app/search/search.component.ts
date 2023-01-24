import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../Services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(
    private service: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  enteredSerchValue: string = '';
  movie: any;
  movieId: number = 0;
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.enteredSerchValue);
  }

  onSearchClicked() {
    this.movie = this.service.movies.find(
      (movie) => movie.name.toLowerCase() == this.enteredSerchValue
    );
    this.movieId = this.movie.id;
    this.router.navigate(['/Movie/',this.movieId]);
  }
}
