import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DistinctionsService } from 'src/app/services/conversation/distinctions/distinctions.service';
import { HelperService } from 'src/app/services/conversation/helpers/helper.service';
import { ModalsService } from 'src/app/services/modals/modals.service';
import { ModalErrorComponent } from '../../modals/modal-error/modal-error.component';

@Component({
	selector: 'app-distinctions',
	templateUrl: './distinctions.component.html',
	styleUrls: ['./distinctions.component.css'],
})
export class DistinctionsComponent implements OnInit {
	@ViewChild('content') content: ElementRef | undefined;
	@ViewChild(ModalErrorComponent) modalError: ModalErrorComponent;
	back: string = 'conversation/questions';
	distinctions: any = [];
	distinctionContent: string = '';
	idESSEQ: number = -1;
	form = new FormGroup({
		cards: new FormControl('', [Validators.required]),
	});

	constructor(
		private distinctionsService: DistinctionsService,
		private helperConversation: HelperService,
		private modalsService: ModalsService,
		private router: Router
	) {
		this.helperConversation.removeAllExceptEnvSitSenEmotQuestion();
		this.idESSEQ = Number(sessionStorage.getItem('esseeq'));
		this.distinctionsService.getDistinctionsByESSEQ(this.idESSEQ).subscribe(
			(res) => {
				if (res.length > 0) this.distinctions = res;
				else this.modalError.showModalError(this.back, 'lg');
			},
			(err) => this.modalError.showModalError(this.back, 'lg')
		);
	}

	ngOnInit(): void {}

	async continue() {
		const contentDistinction = this.form.controls.cards.value.split('-');
		const idDistinction = Number(contentDistinction[0]);
		const isValid = await this.getIsValid(idDistinction, contentDistinction);
		if (isValid) {
			this.distinctionsService.show(idDistinction).subscribe(
				(res) => {
					sessionStorage.setItem('distinction', `${JSON.stringify(res)}`);
					this.router.navigate(['/conversation/distinctions/details']);
				},
				(err) => this.modalError.showModalError(this.back, 'lg')
			);
		} else this.modalsService.open(this.content, 'lg');
	}

	async getIsValid(
		idDistinction: number,
		contentDistinction: any
	): Promise<boolean> {
		try {
			const res = await this.distinctionsService
				.validateDistinction(this.idESSEQ, idDistinction)
				.toPromise();

			if (res[0].isCorrect === 1) {
				const idESSEQD = Number(contentDistinction[1]);
				sessionStorage.setItem('esseeqd', `${idESSEQD}`);
				return true;
			}
		} catch (error) {
			console.log(error);
		}

		return false;
	}

	goBack() {
		this.helperConversation.removeAllExceptEnvSitSenEmotQuestion();
		this.router.navigate(['/conversation/questions']);
	}
}
