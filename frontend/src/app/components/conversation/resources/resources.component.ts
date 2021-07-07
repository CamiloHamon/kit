import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  environment: any = [];
  situation: any = [];
  sensation: any = [];
  emotion: any = [];
  question: any = [];
  distinction: any = [];
  resourceContent: string = '';
  resources: any = [];
  idESSEQD: number = -1;
  idESSEQDR: number = -1;
  idResource: number = -1;

  constructor(private resourcesService: ResourcesService, private router: Router) {
    let infoEnvironment: any = localStorage.getItem('environment');
    infoEnvironment = JSON.parse(infoEnvironment);

    let infoSituation: any = localStorage.getItem('situation');
    infoSituation = JSON.parse(infoSituation);

    let infoSensation: any = localStorage.getItem('sensation');
    infoSensation = JSON.parse(infoSensation);

    let infoEmotion: any = localStorage.getItem('emotion');
    infoEmotion = JSON.parse(infoEmotion);

    let infoQuestion: any = localStorage.getItem('question');
    infoQuestion = JSON.parse(infoQuestion);

    let infoDistinction: any = localStorage.getItem('distinction');
    infoDistinction = JSON.parse(infoDistinction);

    this.environment = infoEnvironment;
    this.situation = infoSituation;
    this.sensation = infoSensation;
    this.emotion = infoEmotion;
    this.question = infoQuestion;
    this.distinction = infoDistinction;
    this.idESSEQD = Number(localStorage.getItem('esseeqd'));
    this.resourcesService.getResourcesByESSEQD(this.idESSEQD).subscribe(
      res =>{
        this.resources = res;
        console.log(res);
      },
      err =>{
        console.log(err);
      }
    )
  }

  ngOnInit(): void {
  }

  continue() {
    const contentResource = this.resourceContent.split('-');
    this.idResource = Number(contentResource[0]);
    this.resourcesService.show(this.idResource).subscribe(
      res => {
        localStorage.setItem('resource', `${JSON.stringify(res)}`);
      },
      err => { console.log(err) }
    );
    this.resourcesService.validateResource(this.idESSEQD, this.idResource).subscribe(
      res => {
        if (res[0].isCorrect === 1) {
          this.idESSEQDR = Number(contentResource[1]);
          localStorage.setItem('esseeqdr', `${this.idESSEQDR}`);
          this.router.navigate(['/conversation/feedback']);
        } else {
          alert('Error!!')
        }
      },
      err => {
        console.log(err);
      }
    )
  }

}
