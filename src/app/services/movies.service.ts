import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movies: any;
  searchKey: string;
  filteredMovies: any;
  constructor() {
    this.movies = [
      {
        id: '1',
        name: 'Shawshank Redemption ',
        director: 'Neil Armstrong',
        writers: 'Yusuf Göktaş',
        stars: 'Morgan Freeman,Tim Robbins',
        type: 'Dram',
        rate: 8.3,
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
        rate: 6.7,
        date: '(1976)',
        length: '2hr 11min',
        img: './../../../../assets/img/god.jpg',
        release: 'Hollywood',
        actorsIcon: './../../../../assets/img/god.jpg',
        actors: 'Ömer Odabaş',
      },
    ];
  }

  makeSearch() {
    this.filteredMovies = this.movies.filter((m: any) => {
      return m.name.toLowerCase().includes(this.searchKey.toLowerCase());
    });

    console.log(this.filteredMovies);
  }
}
