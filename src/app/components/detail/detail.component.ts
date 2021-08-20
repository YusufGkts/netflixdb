import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movies.service';
@Component({
  selector: 'detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.scss'],
})
export class DetailComponent implements OnInit {
  details: any;
  constructor(private moviedetails: MovieService) {}

  ngOnInit() {
    this.details = this.moviedetails.movies;
  }
}
