import { Component, OnInit } from '@angular/core';
import { CombinationsService } from 'src/app/services/effective/combinations/combinations.service';

@Component({
	selector: 'app-cards-combinations',
	templateUrl: './cards-combinations.component.html',
	styleUrls: ['./cards-combinations.component.css'],
})
export class CardsCombinationsComponent implements OnInit {
	emotion: any = [];
	question: any = [];
	distinction: any = [];
	resource: any = [];

	constructor(private combinationService: CombinationsService) {
		this.combinationService.changeOpt.subscribe((index: number) => {
			if (index === 1) this.optionOne();
			else this.optionTwo();
		});
	}

	ngOnInit(): void {
		this.optionOne();
	}

	optionOne() {
		const combinationOne = JSON.parse(
			sessionStorage.getItem('combination-one')!
		);
		this.refresh(combinationOne);
	}

	optionTwo() {
		const combinationTwo = JSON.parse(
			sessionStorage.getItem('combination-two')!
		);
		this.refresh(combinationTwo);
	}

	refresh(combination: any) {
		this.emotion = {
			id: combination.id_emotion,
			name: combination.emotion,
			description: combination.emotion_description,
		};

		this.question = {
			id: combination.id_question,
			name: combination.question,
			description: combination.question_description,
		};

		this.distinction = {
			id: combination.id_distinction,
			name: combination.distinction,
			description: combination.distinction_description,
		};

		this.resource = {
			id: combination.id_resource,
			name: combination.resource,
			description: combination.resource_description,
		};
	}
}
