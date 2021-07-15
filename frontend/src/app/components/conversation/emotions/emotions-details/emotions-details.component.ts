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
				const split = this.emotion.description.split('. ');
				let generate = split[0].split('? ');
				generate = generate[1];
				let comunication = split[1].split('? ');
				comunication = comunication[1];
				this.emotion.generate = generate;
				this.emotion.comunication = comunication;
			} catch (e) {}
		} else router.navigate(['/conversation/emotions']);
	}

	ngOnInit(): void {}
}
