import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmotionsService } from 'src/app/services/conversation/emotions/emotions.service';

@Component({
	selector: 'app-emotions-bank',
	templateUrl: './emotions-bank.component.html',
	styleUrls: ['./emotions-bank.component.css'],
})
export class EmotionsBankComponent implements OnInit {
	emotions: any = [];
	emotionContent: string = '';
	form = new FormGroup({
		cards: new FormControl('', [Validators.required]),
	});
	constructor(private emotionsServices: EmotionsService) {}

	ngOnInit(): void {
		this.emotionsServices.index().subscribe(
			(res) => {
				if (res.length > 0) {
					this.emotions = res;
					console.log(this.emotions);
				}
			},
			(err) => {}
		);
	}
}
