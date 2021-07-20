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
		private router: Router
	) {}

	ngOnInit(): void {
		this.emotionsService.index().subscribe(
			(res) => (this.emotions = res),
			(err) => console.log(err)
		);
	}

	splitEmotion() {
		const split = this.emotionSelected.description.split('. ');
		if (split.length > 0) {
			let generate = split[0].split('? ');
			generate = generate[1];
			this.emotionSelected.generate = generate;
			if (split.length > 1) {
				let comunication = split[1].split('? ');
				comunication = comunication[1];
				this.emotionSelected.comunication = comunication;
			}
		}
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

	continue() {
		sessionStorage.setItem('emotion', JSON.stringify(this.emotionSelected));
		this.router.navigate(['/practice/card-combination']);
	}
}
