import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: 'rating.component.html',
  styleUrls: ['rating.component.scss'],
})
export class RatingComponent implements OnInit {
  @Input() val: number;
  roundVal: number;
  total: number = 10;

  constructor() {}

  ngOnInit() {
    this.roundVal = Math.round(this.val);
  }
}
