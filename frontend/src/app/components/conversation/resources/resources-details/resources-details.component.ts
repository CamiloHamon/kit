import { Component, OnInit } from '@angular/core';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-resources-details',
  templateUrl: './resources-details.component.html',
  styleUrls: ['./resources-details.component.css']
})
export class ResourcesDetailsComponent implements OnInit {

  resources: any = [];
  constructor(private resoursesService: ResourcesService) {
    this.resources = this.resoursesService.getResource();
  }

  ngOnInit(): void {
  }

}
