import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})
export class ListComponent implements OnInit {
  movies: any;

  constructor() {}

  ngOnInit() {
    this.movies = [
      {
        name: 'Shawshank Redemption ',
        director: 'Neil Armstrong',
        stars: 'Morgan Freeman,Tim Robbins',
        rate: 9.2,
        kind: 'Dram/Gerçek Hikaye',
        date: '(1994)',
        img: './../../../../assets/img/shaw.jpg',
      },
      {
        name: 'God Father ',
        director: 'Neil Armstrong',

        stars: 'Marlon Brando, Al Pacino',
        rate: 9.1,
        kind: 'Dram/Gerçek Hikaye',
        date: '(1972)',
        img: './../../../../assets/img/god.jpg',
      },
    ];
  }
}
