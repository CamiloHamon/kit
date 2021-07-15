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

	constructor() {}

	ngOnInit(): void {
		this.emotion = sessionStorage.getItem('emotion');
		console.log(this.emotion);
		this.question = sessionStorage.getItem('question');
		this.distinction = sessionStorage.getItem('distinction');
		this.resource = sessionStorage.getItem('resource');
	}
}
