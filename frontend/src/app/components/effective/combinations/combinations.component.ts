import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
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
	questionLength: number = 0;
	distinction: any = [];
	resource: any = [];

	constructor(
		private router: Router,
		private effectiveCombinationService: CombinationsService,
		private authService: AuthService
	) {
		const skipIntructions = this.searchUserInstructions();
		if (!skipIntructions) {
			this.instructions = true;
			this.stepOne = true;
		}
		this.searchUserInstructions();
	}

	searchUserInstructions(): boolean {
		try {
			const objInstructions = JSON.parse(localStorage.getItem('instructions')!);
			if (objInstructions) {
				const index = objInstructions.indexOf(this.authService.getUser());
				if (index !== -1) return true;
			}
		} catch (error) {
			localStorage.removeItem('instructions');
		}

		return false;
	}

	ngOnInit(): void {
		this.optionOne();
		this.questionLength = this.question.name.length;
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
			default_text: combination.emotion_default_text,
		};

		this.question = {
			id: combination.id_question,
			name: combination.question,
			description: combination.question_description,
			default_text: combination.question_default_text,
		};

		this.distinction = {
			id: combination.id_distinction,
			name: combination.distinction,
			description: combination.distinction_description,
			default_text: combination.distinction_default_text,
		};

		this.resource = {
			id: combination.id_resource,
			name: combination.resource,
			description: combination.resource_description,
			default_text: combination.resource_default_text,
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
		this.questionLength = this.question.name.length;
	}

	splitEmotion() {
		const description = this.emotion.description;

		let auxDescription = description
			.slice(description.indexOf('?') + 1, description.length)
			.trim();

		const existComunication = auxDescription.indexOf('¿');

		if (existComunication != -1) {
			this.emotion.comunication = auxDescription
				.slice(auxDescription.indexOf('?') + 1, auxDescription.length)
				.trim();

			auxDescription = auxDescription.slice(0, existComunication).trim();
		}

		this.emotion.generate = auxDescription;
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

	sendCardEmitter(cardInfo: any) {
		this.effectiveCombinationService.cards.emit(cardInfo);
	}

	getInstructions() {
		return localStorage.getItem('instructions');
	}

	skip() {
		this.instructions = false;
		this.stepOne = false;
		let objInstructions = JSON.parse(this.getInstructions()!);
		try {
			if (objInstructions) {
				objInstructions.push(this.authService.getUser());
			} else {
				objInstructions = [this.authService.getUser()];
			}
			localStorage.setItem('instructions', JSON.stringify(objInstructions));
		} catch (error) {
			localStorage.removeItem('instructions');
		}
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
		sessionStorage.setItem('emotion', JSON.stringify(this.emotion));
		sessionStorage.setItem('question', JSON.stringify(this.question));
		sessionStorage.setItem('distinction', JSON.stringify(this.distinction));
		sessionStorage.setItem('resource', JSON.stringify(this.resource));
		this.router.navigate(['/effective-combinations/feedback']);
	}
}
