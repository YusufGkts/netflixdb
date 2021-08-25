import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movies.service';
@Component({
  selector: 'list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})
export class ListComponent implements OnInit {
  moviesList: any;
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.moviesList = this.movieService.movies;
  }
}
