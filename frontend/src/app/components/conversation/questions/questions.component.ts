import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  environment: any = [];
  situation: any = [];
  sensation: any = [];
  emotion: any = [];
  questions: any = [];
  questionContent: string = '';
  idESSE: number = -1;
  idESSEQ: number = -1;
  idQuestion: number = -1;

  constructor(private questionsService: QuestionsService, private router:Router) {
    let infoEnvironment: any = localStorage.getItem('environment');
    infoEnvironment = JSON.parse(infoEnvironment);

    let infoSituation: any = localStorage.getItem('situation');
    infoSituation = JSON.parse(infoSituation);

    let infoSensation: any = localStorage.getItem('sensation');
    infoSensation = JSON.parse(infoSensation);

    let infoEmotion: any = localStorage.getItem('emotion');
    infoEmotion = JSON.parse(infoEmotion);

    this.environment = infoEnvironment;
    this.situation = infoSituation;
    this.sensation = infoSensation;
    this.emotion = infoEmotion;
    this.idESSE = Number(localStorage.getItem('esse'));
    this.questionsService.getQuestionsByESSE(this.idESSE).subscribe(
      res => {
        this.questions = res;
        console.log(this.questions);
      },
      err => {
        console.log(err);
      }
    )
  }

  ngOnInit(): void {
  }

  continue() {
    const contentQuestion = this.questionContent.split('-');
    this.idQuestion = Number(contentQuestion[0]);
    this.idESSEQ = Number(contentQuestion[1]);
    localStorage.setItem('esseeq', `${this.idESSEQ}`);
    this.questionsService.show(this.idQuestion).subscribe(
      res => {
        localStorage.setItem('question', `${JSON.stringify(res)}`);
      },
      err => { console.log(err) }
    );
    this.questionsService.validateQuestion(this.idESSE, this.idQuestion).subscribe(
      res => {
        if (res[0].isCorrect === 1) {
          alert('Passsss')
          //this.router.navigate(['/conversation/distinctions']);
        }else{
          alert('Error!!')
        }
      },
      err => {
        console.log(err);
      }
    )
  }
}
