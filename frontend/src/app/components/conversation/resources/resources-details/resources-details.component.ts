import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources-details',
  templateUrl: './resources-details.component.html',
  styleUrls: ['./resources-details.component.css']
})
export class ResourcesDetailsComponent implements OnInit {
  
  resources:any = [];
  constructor() {
    let infoQuestion: any = localStorage.getItem('resource');
    const content = JSON.parse(infoQuestion);
    this.resources = content;
    console.log(this.resources)
  }

  ngOnInit(): void {
  }

}
