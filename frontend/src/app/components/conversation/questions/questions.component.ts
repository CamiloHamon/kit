import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FunctionsService } from 'src/app/services/functions.service';
import { QuestionsService } from 'src/app/services/questions.service';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: any = [];
  questionContent: string = '';
  idESSE: number = -1;

  constructor(private questionsService: QuestionsService,
    private functionsService: FunctionsService,
    private router: Router) {
    this.functionsService.removeAllExceptEnvSitSenEmotion();
    this.idESSE = Number(sessionStorage.getItem('esse'));
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
    const idQuestion = Number(contentQuestion[0]);

    this.questionsService.show(idQuestion).subscribe(
      res => {
        sessionStorage.setItem('question', `${JSON.stringify(res)}`);
      },
      err => { console.log(err) }
    );
    this.questionsService.validateQuestion(this.idESSE, idQuestion).subscribe(
      res => {
        if (res[0].isCorrect === 1) {
          const idESSEQ = Number(contentQuestion[1]);
          sessionStorage.setItem('esseeq', `${idESSEQ}`);
          this.router.navigate(['/conversation/questions/details']);
        } else {
          alert('Error!!')
        }
      },
      err => {
        console.log(err);
      }
    )
  }

  goBack() {
    this.functionsService.removeAllExceptEnvSitSenEmotion();
    this.router.navigate(['/conversation/emotions']);
  }
}
