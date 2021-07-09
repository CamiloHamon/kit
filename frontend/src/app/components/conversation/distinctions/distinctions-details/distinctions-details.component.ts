import { Component, OnInit } from '@angular/core';
import { DistinctionsService } from 'src/app/services/distinctions.service';

@Component({
  selector: 'app-distinctions-details',
  templateUrl: './distinctions-details.component.html',
  styleUrls: ['./distinctions-details.component.css']
})
export class DistinctionsDetailsComponent implements OnInit {

  distinction:any = [];
  constructor(private distinctionsService:DistinctionsService) {
    this.distinction = this.distinctionsService.getDistinction();
  }

  ngOnInit(): void {
  }

}
