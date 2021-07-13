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
	distinction: any = [];
	resource: any = [];
	stepNumber: number = 1;
	rhombus: boolean = true;

	constructor(
		public environmentsServices: EnvironmentsService,
		public situationsServices: SituationsService,
		public sensationsServices: SensationService,
		public emotionsServices: EmotionsService,
		public questionsServices: QuestionsService,
		public distinctionsServices: DistinctionsService,
		public resourcesServices: ResourcesService
	) {
		this.environment = environmentsServices.getEnvironment();
		this.situation = situationsServices.getSituation();
		this.sensation = sensationsServices.getSensation();
		this.emotion = emotionsServices.getEmotion();
		this.question = questionsServices.getQuestion();
		this.distinction = distinctionsServices.getDistinction();
		this.resource = resourcesServices.getResource();
		this.getNumberStep();
	}

	ngOnInit(): void {}

	getNumberStep() {
		if (this.environmentsServices.existEnvironment()) {
			this.stepNumber++;
		}
		if (this.situationsServices.existSituation()) {
			this.stepNumber++;
		}
		if (this.sensationsServices.existSensation()) {
			this.stepNumber++;
		}
		if (this.emotionsServices.existEmotion()) {
			this.stepNumber++;
		}
		if (this.questionsServices.existQuestion()) {
			this.stepNumber++;
		}
		if (this.distinctionsServices.existDistinction()) {
			this.stepNumber++;
		}
		if (this.resourcesServices.existResource()) {
			this.stepNumber++;
		}

		if (this.stepNumber > 7) {
			this.rhombus = false;
		}
	}
}
