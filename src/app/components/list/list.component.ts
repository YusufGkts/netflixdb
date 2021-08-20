import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movies.service';
@Component({
  selector: 'list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})
export class ListComponent implements OnInit {
  movies: any;
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movies = this.movieService.movies;
  }
}
