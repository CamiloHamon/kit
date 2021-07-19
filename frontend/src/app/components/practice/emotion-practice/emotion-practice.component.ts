import { Component, OnInit } from '@angular/core';
import { EmotionsService } from 'src/app/services/conversation/emotions/emotions.service';

@Component({
	selector: 'app-emotion-practice',
	templateUrl: './emotion-practice.component.html',
	styleUrls: ['./emotion-practice.component.css'],
})
export class EmotionPracticeComponent implements OnInit {
	emotions: any = [];
	constructor(private emotionsService: EmotionsService) {}

	ngOnInit(): void {
		this.emotionsService.index().subscribe(
			(res) => (this.emotions = res),
			(err) => console.log(err)
		);
	}
}
