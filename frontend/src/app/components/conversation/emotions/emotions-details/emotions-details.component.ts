import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmotionsService } from 'src/app/services/conversation/emotions/emotions.service';

@Component({
	selector: 'app-emotions-details',
	templateUrl: './emotions-details.component.html',
	styleUrls: ['./emotions-details.component.css'],
})
export class EmotionsDetailsComponent implements OnInit {
	emotion: any = [];

	constructor(
		private emotionsService: EmotionsService,
		private router: Router
	) {
		if (this.emotionsService.existEmotion()) {
			try {
				this.emotion = this.emotionsService.getEmotion();
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
			} catch (e) {}
		} else router.navigate(['/conversation/emotions']);
	}

	ngOnInit(): void {}
}
