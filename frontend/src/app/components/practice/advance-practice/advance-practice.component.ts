import { Component, OnInit } from '@angular/core';
import { CombinationsService } from 'src/app/services/effective/combinations/combinations.service';

@Component({
	selector: 'app-advance-practice',
	templateUrl: './advance-practice.component.html',
	styleUrls: ['./advance-practice.component.css'],
})
export class AdvancePracticeComponent implements OnInit {
	situation: string;
	emotion: any = {};
	question: any = {};
	distinction: any = {};
	resource: any = {};

	questionLength: number = 0;

	constructor(private effectiveCombinationService: CombinationsService) {}

	ngOnInit(): void {
		this.situation = sessionStorage.getItem('situation')!;
		this.emotion = JSON.parse(sessionStorage.getItem('emotion')!);
		this.question = JSON.parse(sessionStorage.getItem('question')!);
		this.distinction = JSON.parse(sessionStorage.getItem('distinction')!);
		this.resource = JSON.parse(sessionStorage.getItem('resource')!);
		if (this.question) this.questionLength = this.question.name.length;
	}

	sendCardEmitter(cardInfo: any) {
		this.effectiveCombinationService.cards.emit(cardInfo);
	}
}
