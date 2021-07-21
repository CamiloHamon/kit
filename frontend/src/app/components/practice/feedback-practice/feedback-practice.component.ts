import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-feedback-practice',
	templateUrl: './feedback-practice.component.html',
	styleUrls: ['./feedback-practice.component.css'],
})
export class FeedbackPracticeComponent implements OnInit {
	situation: string;
	emotion: any = [];
	question: any = [];
	distinction: any = [];
	resource: any = [];

	constructor() {}

	ngOnInit(): void {
		this.situation = sessionStorage.getItem('situation')!;
		this.emotion = JSON.parse(sessionStorage.getItem('emotion')!);
		this.question = JSON.parse(sessionStorage.getItem('question')!);
		this.distinction = JSON.parse(sessionStorage.getItem('distinction')!);
		this.resource = JSON.parse(sessionStorage.getItem('resource')!);
	}
}
