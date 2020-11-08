import {Component, OnInit, Input } from '@angular/core';

declare var Snap: any;
declare var mina: any;

@Component({
  selector: 'coffee-board-list-header',
  templateUrl: './coffee-board-list-header.component.html',
  styleUrls: ['./coffee-board-list-header.component.scss']
})

export class CoffeeBoardListHeaderComponent implements OnInit {
  @Input() lineHeight: number;
  @Input() title: string;
  smoke: any;
  constructor() { }

  ngOnInit() {
    this.smoke = Snap.select('#smoke');
    this.animateSmokeInverted();
  }

  animateSmokeInverted() {
    const totalAnimationDuration = 2000;
    const animationFrame = requestAnimationFrame(this.animateSmokeInverted);

    this.smoke.animate({
        opacity: 0,
      }, totalAnimationDuration, mina.linear);

    this.smoke.animate({
        transform: 't62,38s-1,1t-79,-48t155 -30'
      }, totalAnimationDuration, mina.linear);


    setTimeout(() => {
      this.resetAnimation();
      this.animateSmokeInverted();
    }, 2000);

    cancelAnimationFrame(animationFrame);
  }

  resetAnimation() {
      this.smoke.attr({
        opacity: 1,
        transform: '0,0,1t-79,-48t-30, 120'
      });
  }

}
