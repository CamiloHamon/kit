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

	continue() {
		const contentQuestion = this.form.controls.cards.value.split('-');
		const idQuestion = Number(contentQuestion[0]);

		this.questionsService.show(idQuestion).subscribe(
			(res) => {
				sessionStorage.setItem('question', `${JSON.stringify(res)}`);
			},
			(err) => this.modalError.showModalError(this.back, 'lg')
		);
		this.questionsService.validateQuestion(this.idESSE, idQuestion).subscribe(
			(res) => {
				if (res.length > 0) {
					if (res[0].isCorrect === 1) {
						const idESSEQ = Number(contentQuestion[1]);
						sessionStorage.setItem('esseeq', `${idESSEQ}`);
						this.router.navigate(['/conversation/questions/details']);
					} else {
						this.modalsService.open(this.content, 'lg');
					}
				} else this.modalError.showModalError(this.back, 'lg');
			},
			(err) => this.modalError.showModalError(this.back, 'lg')
		);
	}

	goBack() {
		this.helperConversation.removeAllExceptEnvSitSenEmotion();
		this.router.navigate(['/conversation/emotions']);
	}
}
