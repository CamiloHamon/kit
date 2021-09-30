import { Component, OnInit } from '@angular/core';
import { DistinctionsService } from 'src/app/services/conversation/distinctions/distinctions.service';
import { EmotionsService } from 'src/app/services/conversation/emotions/emotions.service';
import { EnvironmentsService } from 'src/app/services/conversation/environments/environments.service';
import { QuestionsService } from 'src/app/services/conversation/questions/questions.service';
import { ResourcesService } from 'src/app/services/conversation/resources/resources.service';
import { SensationService } from 'src/app/services/conversation/sensations/sensations.service';
import { SituationsService } from 'src/app/services/conversation/situations/situations.service';

@Component({
	selector: 'app-cards-section',
	templateUrl: './cards-section.component.html',
	styleUrls: ['./cards-section.component.css'],
})
export class CardsSectionComponent implements OnInit {
	environment: any = [];
	situation: any = [];
	sensation: any = [];
	emotion: any = [];
	question: any = [];
	questionLength = 0;
	distinction: any = [];
	resource: any = [];
	stepNumber: number = 1;
	rhombus: boolean = true;
	currentLink: string = 'environment_';

	constructor(
		public environmentsServices: EnvironmentsService,
		public situationsServices: SituationsService,
		public sensationsServices: SensationService,
		public emotionsServices: EmotionsService,
		public questionsServices: QuestionsService,
		public distinctionsServices: DistinctionsService,
		public resourcesServices: ResourcesService
	) {}

	ngOnInit(): void {
		this.environment = this.environmentsServices.getEnvironment();
		this.situation = this.situationsServices.getSituation();
		this.sensation = this.sensationsServices.getSensation();
		this.emotion = this.emotionsServices.getEmotion();
		this.question = this.questionsServices.getQuestion();
		this.distinction = this.distinctionsServices.getDistinction();
		this.resource = this.resourcesServices.getResource();

		if (this.question) this.questionLength = this.question.name.length;

		this.getNumberStep();
	}

	replace(text: string) {
		return text.replace(/\u00a0/g, ' ');
	}

	getNumberStep() {
		if (this.environmentsServices.existEnvironment()) {
			this.stepNumber++;
			this.currentLink = 'situation_';
		}
		if (this.situationsServices.existSituation()) {
			this.stepNumber++;
			this.currentLink = 'sensation_';
		}
		if (this.sensationsServices.existSensation()) {
			this.stepNumber++;
			this.currentLink = 'emotion_';
		}
		if (this.emotionsServices.existEmotion()) {
			this.stepNumber++;
			this.currentLink = 'question_';
		}
		if (this.questionsServices.existQuestion()) {
			this.stepNumber++;
			this.currentLink = 'distinction_';
		}
		if (this.distinctionsServices.existDistinction()) {
			this.stepNumber++;
			this.currentLink = 'resource_';
		}
		if (this.resourcesServices.existResource()) {
			this.stepNumber++;
		}

		if (this.stepNumber > 7) {
			this.rhombus = false;
		}
	}
}
