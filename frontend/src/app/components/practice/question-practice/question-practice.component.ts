import {
	CdkDrag,
	CdkDragDrop,
	DragDropModule,
	moveItemInArray,
	transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { QuestionsService } from 'src/app/services/conversation/questions/questions.service';

@Component({
	selector: 'app-question-practice',
	templateUrl: './question-practice.component.html',
	styleUrls: ['./question-practice.component.css'],
})
export class QuestionPracticeComponent implements OnInit {
	questions: any = [];
	questionSelected: any = {};
	idQuestionSelected: number;

	constructor(
		private questionService: QuestionsService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.questionService.index().subscribe(
			(res) => (this.questions = res),
			(err) => console.log(err)
		);
	}

	splitQuestion() {
		const split = this.questionSelected.description.split(' - ');
		this.questionSelected.description = split[1];
	}

	drop(event: CdkDragDrop<any>) {
		const indexOf = event.previousIndex;
		if (event.previousContainer !== event.container) {
			if (this.idQuestionSelected > -1) {
				this.questions[this.idQuestionSelected] = this.questionSelected;
			}
			this.questionSelected = this.questions[indexOf];
			this.idQuestionSelected = indexOf;
			this.questions[indexOf] = {};
			this.splitQuestion();
		}
	}

	continue() {
		console.log(this.questionSelected);
		sessionStorage.setItem('question', JSON.stringify(this.questionSelected));
		this.router.navigate(['/practice/card-combination']);
	}
}
