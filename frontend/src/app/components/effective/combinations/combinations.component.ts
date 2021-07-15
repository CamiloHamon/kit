import { Component, Input, OnInit } from '@angular/core';
import { CombinationsService } from 'src/app/services/effective/combinations/combinations.service';

@Component({
	selector: 'app-combinations',
	templateUrl: './combinations.component.html',
	styleUrls: ['./combinations.component.css'],
})
export class CombinationsComponent implements OnInit {
	@Input() index: number = 1;

	emotion: any = [];
	question: any = [];
	distinction: any = [];
	resource: any = [];

	constructor() {}

	ngOnInit(): void {
		this.optionOne();
	}

	optionOne() {
		const combinationOne = JSON.parse(
			sessionStorage.getItem('combination-one')!
		);
		this.refresh(combinationOne);
		this.splitEmotion();
		this.splitQuestion();
	}

	optionTwo() {
		const combinationTwo = JSON.parse(
			sessionStorage.getItem('combination-two')!
		);
		this.refresh(combinationTwo);
		this.splitEmotion();
		this.splitQuestion();
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

	changeOpt(id: number) {
		if (id === 1) {
			this.optionOne();
			this.index = 1;
		} else {
			this.optionTwo();
			this.index = 2;
		}
	}

	splitEmotion() {
		const split = this.emotion.description.split('. ');
		let generate = split[0].split('? ');
		generate = generate[1];
		let comunication = split[1].split('? ');
		comunication = comunication[1];
		this.emotion.generate = generate;
		this.emotion.comunication = comunication;
	}

	splitQuestion() {
		const split = this.question.description.split(' - ');
		this.question.description = split[1];
	}

	continue() {
		alert(this.index);
	}
}
