import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CombinationsService } from 'src/app/services/effective/combinations/combinations.service';

@Component({
	selector: 'app-combinations',
	templateUrl: './combinations.component.html',
	styleUrls: ['./combinations.component.css'],
})
export class CombinationsComponent implements OnInit {
	@Input() index: number = 1;
	step: number = 1;
	instructions: boolean;
	stepOne: boolean;
	stepTwo: boolean;
	stepThree: boolean;
	finishIntructions: boolean;
	btnMinimize: any = { state: false, text: 'expand_less' };

	emotion: any = [];
	question: any = [];
	distinction: any = [];
	resource: any = [];

	constructor(private router: Router) {
		const skipIntructions = localStorage.getItem('instructions');
		if (!skipIntructions) {
			this.instructions = true;
			this.stepOne = true;
		}
	}

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

	nextStep(step: number) {
		this.close();
		if (step === 1) {
			this.step++;
			this.stepOne = false;
			this.stepTwo = true;
		} else if (step === 2) {
			this.step++;
			this.stepTwo = false;
			this.stepThree = true;
		} else {
			this.stepThree = false;
			this.instructions = false;
			this.skip();
		}
	}

	skip() {
		this.instructions = false;
		localStorage.setItem('instructions', 'instructions');
	}

	close() {
		this.btnMinimize.state = true;
		this.btnMinimize.text = 'expand_more';
	}

	open() {
		this.btnMinimize.state = false;
		this.btnMinimize.text = 'expand_less';
	}

	minimize() {
		if (!this.btnMinimize.state) this.close();
		else this.open();
	}

	continue() {
		sessionStorage.setItem('emotion', this.emotion.name);
		sessionStorage.setItem('question', this.question.name);
		sessionStorage.setItem('distinction', this.distinction.name);
		sessionStorage.setItem('resource', this.resource.name);
		this.router.navigate(['/effective-combinations/feedback']);
	}
}
