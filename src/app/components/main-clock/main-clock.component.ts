import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import {map, share} from 'rxjs/operators';

@Component({
  selector: 'app-main-clock',
  templateUrl: './main-clock.component.html',
  styleUrls: ['./main-clock.component.scss']
})

export class MainClockComponent implements OnInit {

  time = new Date();


  constructor() {
  }

  ngOnInit() {
    setInterval(() => {
      this.time = new Date();
   }, 1000);
  }



}
