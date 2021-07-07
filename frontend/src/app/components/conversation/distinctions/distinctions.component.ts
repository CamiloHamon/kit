import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DistinctionsService } from 'src/app/services/distinctions.service';

@Component({
  selector: 'app-distinctions',
  templateUrl: './distinctions.component.html',
  styleUrls: ['./distinctions.component.css']
})
export class DistinctionsComponent implements OnInit {

  environment: any = [];
  situation: any = [];
  sensation: any = [];
  emotion: any = [];
  question: any = [];
  distinctions: any = [];
  distinctionContent: string = '';
  idESSEQ: number = -1;
  idESSEQD: number = -1;
  idDistinction: number = -1;

  constructor(private distinctionsService: DistinctionsService, private router: Router) {
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

    this.environment = infoEnvironment;
    this.situation = infoSituation;
    this.sensation = infoSensation;
    this.emotion = infoEmotion;
    this.question = infoQuestion;
    this.idESSEQ = Number(localStorage.getItem('esseeq'));
    this.distinctionsService.getDistinctionsByESSEQ(this.idESSEQ).subscribe(
      res => {
        this.distinctions = res;
        console.log(this.distinctions);
      },
      err => {
        console.log(err);
      }
    )
  }

  ngOnInit(): void {
  }

  continue() {
    const contentDistinction = this.distinctionContent.split('-');
    this.idDistinction = Number(contentDistinction[0]);
    this.distinctionsService.show(this.idDistinction).subscribe(
      res => {
        localStorage.setItem('distinction', `${JSON.stringify(res)}`);
      },
      err => { console.log(err) }
    );
    this.distinctionsService.validateDistinction(this.idESSEQ, this.idDistinction).subscribe(
      res => {
        if (res[0].isCorrect === 1) {
          this.idESSEQD = Number(contentDistinction[1]);
          localStorage.setItem('esseeqd', `${this.idESSEQD}`);
          this.router.navigate(['/conversation/distinctions/details']);
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
