import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-emotion-practice-modal',
	templateUrl: './emotion-practice-modal.component.html',
	styleUrls: ['./emotion-practice-modal.component.css'],
})
export class EmotionPracticeModalComponent implements OnInit {
	emotion: any = {};
	constructor() {}

	ngOnInit(): void {
		this.emotion = JSON.parse(sessionStorage.getItem('emotion')!);
	}
}
