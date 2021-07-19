import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-advance-practice',
	templateUrl: './advance-practice.component.html',
	styleUrls: ['./advance-practice.component.css'],
})
export class AdvancePracticeComponent implements OnInit {
	situation: string;
	emotion: string;
	question: string;
	distinction: string;
	resource: string;

	constructor() {}

	ngOnInit(): void {
		this.situation = sessionStorage.getItem('situation')!;
		this.emotion = sessionStorage.getItem('emotion')!;
		this.question = sessionStorage.getItem('question')!;
		this.distinction = sessionStorage.getItem('distinction')!;
		this.resource = sessionStorage.getItem('resource')!;
	}
}
