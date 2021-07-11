import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FunctionsService } from 'src/app/services/functions.service';
import { ModalsService } from 'src/app/services/modals/modals.service';
import { QuestionsService } from 'src/app/services/questions.service';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  @ViewChild('content') content: ElementRef | undefined;
  questions: any = [];
  questionContent: string = '';
  idESSE: number = -1;
  form = new FormGroup({
    cards: new FormControl('', [Validators.required])
  });

  constructor(private questionsService: QuestionsService,
    private functionsService: FunctionsService,
    private modalsService: ModalsService,
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
    const contentQuestion = this.form.controls.cards.value.split('-');
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
          this.modalsService.open(this.content, 'lg');
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
