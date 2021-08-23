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
        writers: 'Yusuf Göktaş',
        stars: 'Morgan Freeman,Tim Robbins',
        type: 'Dram',
        rate: 9.2,
        date: '(1994)',
        length: '2hr 11min',
        img: './../../../../assets/img/shaw.jpg',
        release: 'Hollywood',
        actorsIcon: './../../../../assets/img/god.jpg',
        actors: 'Ömer Odabaş',
      },
      {
        id: '2',
        name: 'God Father ',
        director: 'Neil Armstrong',
        writers: 'Yusuf Göktaş',
        stars: 'Morgan Freeman,Tim Robbins',
        type: 'True Story',
        rate: 9.1,
        date: '(1976)',
        length: '2hr 11min',
        img: './../../../../assets/img/god.jpg',
        release: 'Hollywood',
        actorsIcon: './../../../../assets/img/god.jpg',
        actors: 'Ömer Odabaş',
      },
    ];
  }
}
