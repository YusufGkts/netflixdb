import { Component, Input, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.scss'],
})
export class CardComponent implements OnInit {
  panelOpenState = false;
  @Input() movie: any;

  constructor() {}

  ngOnInit() {}
}
