import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/Services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  constructor(private service: MoviesService, private route: ActivatedRoute) {}

  movie: any;
  movieId: any;

  ngOnInit() {
    this.movieId = this.route.snapshot.paramMap.get('id');
    this.movie = this.service.movies.find((movie) => movie.id == this.movieId);
  }
}
