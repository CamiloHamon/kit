import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-questions-details',
  templateUrl: './questions-details.component.html',
  styleUrls: ['./questions-details.component.css']
})
export class QuestionsDetailsComponent implements OnInit {
  question:any = [];

  constructor(private questionsServices:QuestionsService) {
    this.question = this.questionsServices.getQuestion();
    console.log(this.question)
    try {
      const split = this.question.description.split(' - ');
      this.question.use = split[1];
    } catch (e) {
      console.log(e);
    }
  }

  ngOnInit(): void {
  }

}
