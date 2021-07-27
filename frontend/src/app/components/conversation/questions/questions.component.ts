import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { HelperService } from 'src/app/services/conversation/helpers/helper.service';
import { QuestionsService } from 'src/app/services/conversation/questions/questions.service';
import { ModalsService } from 'src/app/services/modals/modals.service';

import { ModalErrorComponent } from '../../modals/modal-error/modal-error.component';

@Component({
	selector: 'app-questions',
	templateUrl: './questions.component.html',
	styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
	@ViewChild('content') content: ElementRef | undefined;
	@ViewChild(ModalErrorComponent) modalError: ModalErrorComponent;
	back: string = 'conversation/emotions';
	questions: any = [];
	questionContent: string = '';
	idESSE: number = -1;

	form = new FormGroup({
		cards: new FormControl('', [Validators.required]),
	});

	constructor(
		private questionsService: QuestionsService,
		private helperConversation: HelperService,
		private modalsService: ModalsService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.helperConversation.removeAllExceptEnvSitSenEmotion();
		this.idESSE = Number(sessionStorage.getItem('esse'));
		this.questionsService.getQuestionsByESSE(this.idESSE).subscribe(
			(res) => {
				if (res.length > 0) {
					this.questions = res;
					this.calcLength();
				} else this.modalError.showModalError(this.back, 'lg');
			},
			(err) => this.modalError.showModalError(this.back, 'lg')
		);
	}

	calcLength() {
		for (const question of this.questions) {
			question.questionLength = question.question.length;
		}
	}

	async continue() {
		const contentQuestion = this.form.controls.cards.value.split('-');
		const idQuestion = Number(contentQuestion[0]);
		const isValid = await this.getIsValid(idQuestion, contentQuestion);
		if (isValid) {
			this.questionsService.show(idQuestion).subscribe(
				(res) => {
					sessionStorage.setItem('question', `${JSON.stringify(res)}`);
					this.router.navigate(['/conversation/questions/details']);
				},
				(err) => this.modalError.showModalError(this.back, 'lg')
			);
		} else this.modalsService.open(this.content, 'lg');
	}

	async getIsValid(idQuestion: number, contentQuestion: any): Promise<boolean> {
		try {
			const res = await this.questionsService
				.validateQuestion(this.idESSE, idQuestion)
				.toPromise();

			if (res[0].isCorrect === 1) {
				const idESSEQ = Number(contentQuestion[1]);
				sessionStorage.setItem('esseeq', `${idESSEQ}`);
				return true;
			}
		} catch (error) {
			console.log(error);
		}

		return false;
	}

	goBack() {
		this.helperConversation.removeAllExceptEnvSitSenEmotion();
		this.router.navigate(['/conversation/emotions']);
	}
}
