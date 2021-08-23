import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movies: any;

  constructor() {
    this.movies = [
      {
        id: '1',
        name: 'Shawshank Redemption ',
        director: 'Neil Armstrong',
        stars: 'Morgan Freeman,Tim Robbins',
        type: 'Dram/Gerçek Hikaye',
        rate: 9.2,
        date: '(1994)',
        length: '2h11m',
        img: './../../../../assets/img/shaw.jpg',
      },
      {
        id: '2',
        name: 'God Father ',
        director: 'Neil Armstrong',
        stars: 'Morgan Freeman,Tim Robbins',
        type: 'Dram/Gerçek Hikaye',
        rate: 9.1,
        date: '(1976)',
        length: '2h11m',
        img: './../../../../assets/img/god.jpg',
      },
    ];
  }
}
