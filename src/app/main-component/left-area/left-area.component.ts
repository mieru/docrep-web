import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-left-area',
  templateUrl: './left-area.component.html',
  styleUrls: ['./left-area.component.css'],
  animations: [
    trigger('toggleState', [
      state('true', style({ width: '230px' })),
      state('false', style({width: '55px' })),
      transition('* => *', animate('300ms')),
    ])
  ]
})
export class LeftAreaComponent implements OnInit {
  @Input() expanded: boolean = true;
  constructor() { }

  ngOnInit() {
  }



}
