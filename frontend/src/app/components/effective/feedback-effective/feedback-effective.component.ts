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
		this.emotion = JSON.parse(sessionStorage.getItem('emotion')!);
		this.question = JSON.parse(sessionStorage.getItem('question')!);
		this.distinction = JSON.parse(sessionStorage.getItem('distinction')!);
		this.resource = JSON.parse(sessionStorage.getItem('resource')!);
		this.questionLength = this.question.name.length;
	}
}
