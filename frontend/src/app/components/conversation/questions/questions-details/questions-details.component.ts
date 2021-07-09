import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-questions-details',
  templateUrl: './questions-details.component.html',
  styleUrls: ['./questions-details.component.css']
})
export class QuestionsDetailsComponent implements OnInit {
  question: any = [];

  constructor(private questionsServices: QuestionsService, private router: Router) {
    if (this.questionsServices.existQuestion()) {
      this.question = this.questionsServices.getQuestion();
      try {
        const split = this.question.description.split(' - ');
        this.question.use = split[1];
      } catch (e) {
        console.log(e);
      }
    } else router.navigate(['/conversation/questions']);
  }

  ngOnInit(): void {
  }

}
