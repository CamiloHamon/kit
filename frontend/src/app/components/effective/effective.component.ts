import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-effective',
  templateUrl: './effective.component.html',
  styleUrls: ['./effective.component.css']
})
export class EffectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onActivate(e: any) {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }

}
