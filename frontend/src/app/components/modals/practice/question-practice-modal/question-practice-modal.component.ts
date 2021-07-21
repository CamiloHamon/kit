import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-question-practice-modal',
	templateUrl: './question-practice-modal.component.html',
	styleUrls: ['./question-practice-modal.component.css'],
})
export class QuestionPracticeModalComponent implements OnInit {
	question: any = {};

	constructor() {}

	ngOnInit(): void {
		this.question = JSON.parse(sessionStorage.getItem('question')!);
	}
}
