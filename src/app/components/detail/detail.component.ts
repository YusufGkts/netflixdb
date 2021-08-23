import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movies.service';
@Component({
  selector: 'detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.scss'],
})
export class DetailComponent implements OnInit {
  movieDetail: any;
  id: any;
  constructor(
    private detailService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.paramMap.subscribe((params: any) => {
      this.id = params.params.id;
    });
  }

  ngOnInit() {
    this.detailService.movies.filter((m: any) => {
      if (m.id == this.id) {
        this.movieDetail = m;
      }
    });
  }
  onClick() {
    this.router.navigate(['']);
  }
}
