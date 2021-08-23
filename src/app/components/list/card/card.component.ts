import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.scss'],
})
export class CardComponent implements OnInit {
  panelOpenState = false;
  @Input() movie: any;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  onClick() {
    this.router.navigate(['detail/' + this.movie.id]);
  }
}
