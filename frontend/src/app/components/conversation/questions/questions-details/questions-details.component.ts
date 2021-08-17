import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { QuestionsService } from 'src/app/services/conversation/questions/questions.service';

@Component({
	selector: 'app-questions-details',
	templateUrl: './questions-details.component.html',
	styleUrls: ['./questions-details.component.css'],
})
export class QuestionsDetailsComponent implements OnInit {
	question: any = [];
	isLarge: boolean = false;

	constructor(
		private questionsServices: QuestionsService,
		private router: Router
	) {
		if (this.questionsServices.existQuestion()) {
			try {
				this.question = this.questionsServices.getQuestion();
				const split = this.question.description.split(' - ');
				this.question.use = split[1];
				if (this.question.argument.length > 600) {
					this.isLarge = true;
					const split = this.question.argument.lastIndexOf(
						' ',
						this.question.argument.length / 2
					);

					this.question.first = this.question.argument.slice(0, split);
					this.question.last = this.question.argument.slice(
						split,
						this.question.argument.length
					);
				}
			} catch (e) {
				router.navigate(['/conversation/questions']);
			}
		} else router.navigate(['/conversation/questions']);
	}

	ngOnInit(): void {}
}
