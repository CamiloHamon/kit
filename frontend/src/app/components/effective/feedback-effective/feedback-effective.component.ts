import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-feedback-effective',
	templateUrl: './feedback-effective.component.html',
	styleUrls: ['./feedback-effective.component.css'],
})
export class FeedbackEffectiveComponent implements OnInit {
	emotion: any = [];
	question: any = [];
	distinction: any = [];
	resource: any = [];
	questionLength: number = 0;

	constructor() {}

	ngOnInit(): void {
		this.emotion = sessionStorage.getItem('emotion');
		this.question = sessionStorage.getItem('question');
		this.distinction = sessionStorage.getItem('distinction');
		this.resource = sessionStorage.getItem('resource');
		this.questionLength = this.question.length;
	}
}
