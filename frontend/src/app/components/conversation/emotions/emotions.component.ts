import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { EmotionsService } from 'src/app/services/conversation/emotions/emotions.service';
import { HelperService } from 'src/app/services/conversation/helpers/helper.service';
import { SensationService } from 'src/app/services/conversation/sensations/sensations.service';
import { SituationsService } from 'src/app/services/conversation/situations/situations.service';

import { ModalErrorComponent } from '../../modals/modal-error/modal-error.component';

@Component({
	selector: 'app-emotions',
	templateUrl: './emotions.component.html',
	styleUrls: ['./emotions.component.css'],
})
export class EmotionsComponent implements OnInit {
	@ViewChild(ModalErrorComponent) modalError: ModalErrorComponent;
	back: string = 'conversation/situations';
	emotions: any = [];
	emotionContent: string = '';
	form = new FormGroup({
		cards: new FormControl('', [Validators.required]),
	});

	constructor(
		private emotionsService: EmotionsService,
		private situationsServices: SituationsService,
		private sensationsServices: SensationService,
		private helperConversation: HelperService,
		private router: Router
	) {
		this.helperConversation.removeAllExceptEnvSitSensation();
		const situation = this.situationsServices.getSituation();
		const sensation = this.sensationsServices.getSensation();
		this.emotionsService
			.getEmotionsByESAndSensation(situation.id, sensation.id)
			.subscribe(
				(res) => {
					if (res.length > 0) this.emotions = res;
					else this.modalError.showModalError(this.back, 'lg');
				},
				(err) => this.modalError.showModalError(this.back, 'lg')
			);
	}

	ngOnInit(): void {}

	continue() {
		const contentEmotion = this.form.controls.cards.value.split('-');
		const idEmotion = Number(contentEmotion[0]);
		const idESSE = Number(contentEmotion[1]);
		sessionStorage.setItem('esse', `${idESSE}`);
		this.emotionsService.show(idEmotion).subscribe(
			(res) => {
				console.log(res);
				sessionStorage.setItem('emotion', `${JSON.stringify(res)}`);
				this.router.navigate(['/conversation/emotions/details']);
			},
			(err) => this.modalError.showModalError(this.back, 'lg')
		);
	}

	goBack() {
		this.helperConversation.removeAllExceptEnvSitSensation();
		this.router.navigate(['/conversation/sensations']);
	}
}
