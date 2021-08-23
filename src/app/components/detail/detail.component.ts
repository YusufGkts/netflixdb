import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movies.service';
@Component({
  selector: 'detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.scss'],
})
export class DetailComponent implements OnInit {
  movieDetail: any;

  constructor(private detailService: MovieService) {}

  ngOnInit() {
    this.detailService.movies.filter((m: any) => {
      if (m.id == 2) {
        this.movieDetail = m;
      }
    });
  }
}
