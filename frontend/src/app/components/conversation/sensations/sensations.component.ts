import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SensationService } from 'src/app/services/sensation.service';


@Component({
  selector: 'app-sensations',
  templateUrl: './sensations.component.html',
  styleUrls: ['./sensations.component.css']
})
export class SensationsComponent implements OnInit {
  idSensation: number = -1;
  sensations: any = [];
  environment: any = [];
  situation: any = [];

  constructor(private sensationService:SensationService, private router:Router) {
    let infoEnvironment: any = localStorage.getItem('environment');
    infoEnvironment = JSON.parse(infoEnvironment);

    let infoSituation: any = localStorage.getItem('situation');
    infoSituation = JSON.parse(infoSituation);

    this.environment = infoEnvironment;
    this.situation = infoSituation;
    
    this.sensationService.index().subscribe(
      res=>{
        this.sensations = res;
        console.log(this.sensations)
      },
      err =>{
        console.log(err);
      }
    )
  }

  ngOnInit(): void {
  }

  continue(){
    console.log(this.idSensation);
    this.sensationService.show(this.idSensation).subscribe(
      res=>{
        localStorage.setItem('sensation', `${JSON.stringify(res)}`);
      },
      err => { console.log(err) }
    )
  }

}
