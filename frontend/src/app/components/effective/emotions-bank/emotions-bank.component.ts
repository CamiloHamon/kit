import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmotionsService } from 'src/app/services/conversation/emotions/emotions.service';
import { EnvironmentsBankService } from 'src/app/services/effective/environments-bank/environments-bank.service';

@Component({
	selector: 'app-emotions-bank',
	templateUrl: './emotions-bank.component.html',
	styleUrls: ['./emotions-bank.component.css'],
})
export class EmotionsBankComponent implements OnInit {
	emotions: any = [];
	idEmotion: number;

	form = new FormGroup({
		cards: new FormControl('', [Validators.required]),
	});

	constructor(
		private emotionsServices: EmotionsService,
		private environmentsBankService: EnvironmentsBankService,
		private router: Router
	) {}

	ngOnInit(): void {
		sessionStorage.clear();
		this.emotionsServices.index().subscribe(
			(res) => {
				if (res.length > 0) {
					this.emotions = res;
				}
			},
			(err) => this.router.navigate(['/home'])
		);
	}

	continue() {
		this.idEmotion = this.form.controls.cards.value;
		this.environmentsBankService
			.buildCombinationByEmotionId(this.idEmotion)
			.subscribe(
				(res) => {
					if (res.length > 0) {
						console.log(res[0]);
						sessionStorage.setItem('combination-one', JSON.stringify(res[0]));
						sessionStorage.setItem('combination-two', JSON.stringify(res[1]));
						this.router.navigate(['/effective-combinations/combinations']);
					} else alert('error');
				},
				(err) => console.log(err)
			);
	}
}
