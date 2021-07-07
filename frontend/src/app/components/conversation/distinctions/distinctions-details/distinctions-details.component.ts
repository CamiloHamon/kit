import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distinctions-details',
  templateUrl: './distinctions-details.component.html',
  styleUrls: ['./distinctions-details.component.css']
})
export class DistinctionsDetailsComponent implements OnInit {

  distinction:any = [];
  constructor() {
    let infoDistinction: any = localStorage.getItem('distinction');
    const content = JSON.parse(infoDistinction);
    this.distinction = content;
  }

  ngOnInit(): void {
  }

}
