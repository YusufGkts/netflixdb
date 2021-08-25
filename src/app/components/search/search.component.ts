import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movies.service';

@Component({
  selector: 'search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.scss'],
})
export class SearchBarComponent implements OnInit {
  constructor(public movieService: MovieService) {}

  ngOnInit() {}
}
