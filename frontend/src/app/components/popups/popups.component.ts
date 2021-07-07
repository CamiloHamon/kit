import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popups',
  templateUrl: './popups.component.html',
  styleUrls: ['./popups.component.css']
})
export class PopupsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mdlSampleIsOpen: boolean = false;
  
  openModal(open: boolean): void {
    this.mdlSampleIsOpen = open;
  }

}
