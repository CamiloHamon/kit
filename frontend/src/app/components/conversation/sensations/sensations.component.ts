import { Component, OnInit } from '@angular/core';
import { SensationService } from 'src/app/services/sensation.service';


@Component({
  selector: 'app-sensations',
  templateUrl: './sensations.component.html',
  styleUrls: ['./sensations.component.css']
})
export class SensationsComponent implements OnInit {
  idEmotion: number = -1;
  emotions: any = [];
  environment: any = [];
  situation: any = [];
  situations: any = [];

  constructor(private sensationService:SensationService) {
    let infoEnvironment: any = localStorage.getItem('environment');
    infoEnvironment = JSON.parse(infoEnvironment);

    let infoSituation: any = localStorage.getItem('situation');
    infoSituation = JSON.parse(infoSituation);

    this.environment = infoEnvironment;
    this.situation = infoSituation;

    
  }

  ngOnInit(): void {
  }

}
