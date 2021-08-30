import { Component, OnInit } from '@angular/core';
import { EmotionsService } from 'src/app/services/conversation/emotions/emotions.service';
import {
	CdkDrag,
	CdkDragDrop,
	DragDropModule,
	moveItemInArray,
	transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { CombinationsService } from 'src/app/services/effective/combinations/combinations.service';

@Component({
	selector: 'app-emotion-practice',
	templateUrl: './emotion-practice.component.html',
	styleUrls: ['./emotion-practice.component.css'],
})
export class EmotionPracticeComponent implements OnInit {
	emotions: any = [];
	emotionSelected: any = {};
	idEmotionSelected: number;

	constructor(
		private emotionsService: EmotionsService,
		private effectiveCombinationService: CombinationsService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.emotionsService.index().subscribe(
			(res) => (this.emotions = res),
			(err) => console.log(err)
		);
	}

	splitEmotion() {
		const description = this.emotionSelected.description;

		let auxDescription = description
			.slice(description.indexOf('?') + 1, description.length)
			.trim();

		const existComunication = auxDescription.indexOf('¿');

		if (existComunication != -1) {
			this.emotionSelected.comunication = auxDescription
				.slice(auxDescription.indexOf('?') + 1, auxDescription.length)
				.trim();

			auxDescription = auxDescription.slice(0, existComunication).trim();
		}

		this.emotionSelected.generate = auxDescription;
	}

	drop(event: CdkDragDrop<any>) {
		const indexOf = event.previousIndex;
		if (event.previousContainer !== event.container) {
			if (this.idEmotionSelected > -1) {
				this.emotions[this.idEmotionSelected] = this.emotionSelected;
			}
			this.emotionSelected = this.emotions[indexOf];
			this.idEmotionSelected = indexOf;
			this.emotions[indexOf] = {};
			this.splitEmotion();
		}
	}

	sendCardEmitter(cardInfo: any) {
		this.effectiveCombinationService.cards.emit(cardInfo);
		this.effectiveCombinationService.practice.emit(true);
	}
}
