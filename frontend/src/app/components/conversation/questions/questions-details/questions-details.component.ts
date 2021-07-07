import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions-details',
  templateUrl: './questions-details.component.html',
  styleUrls: ['./questions-details.component.css']
})
export class QuestionsDetailsComponent implements OnInit {
  question:any = [];
  constructor() {
    let infoQuestion: any = localStorage.getItem('question');
    const content = JSON.parse(infoQuestion);
    this.question = content;
    console.log(content)
    try {
      const split = content.description.split(' - ');
      this.question.use = split[1];
      console.log(this.question)
    } catch (e) {
      console.log(e);
    }
  }

  ngOnInit(): void {
  }

}
