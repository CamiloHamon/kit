import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  environment: any = [];
  situation: any = [];
  sensation: any = [];
  emotion: any = [];
  question: any = [];
  distinction: any = [];
  resource: any = [];

  constructor(private router: Router) {
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
    let infoResource: any = localStorage.getItem('resource');
    infoResource = JSON.parse(infoResource);

    this.environment = infoEnvironment;
    this.situation = infoSituation;
    this.sensation = infoSensation;
    this.emotion = infoEmotion;
    this.question = infoQuestion;
    this.distinction = infoDistinction;
    this.resource = infoResource;
    
  }

  ngOnInit(): void {
  }

}
