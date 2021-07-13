import { Injectable } from '@angular/core';
import { DistinctionsService } from '../distinctions/distinctions.service';
import { EmotionsService } from '../emotions/emotions.service';
import { EnvironmentsService } from '../environments/environments.service';
import { QuestionsService } from '../questions/questions.service';
import { ResourcesService } from '../resources/resources.service';
import { SensationService } from '../sensations/sensations.service';
import { SituationsService } from '../situations/situations.service';

@Injectable({
	providedIn: 'root',
})
export class HelperService {
	constructor(
		private environmentsServices: EnvironmentsService,
		private situationsService: SituationsService,
		private sensationsService: SensationService,
		private emotionsService: EmotionsService,
		private questionsService: QuestionsService,
		private distinctionsService: DistinctionsService,
		private resourcesService: ResourcesService
	) {}

	removeAllItems() {
		sessionStorage.removeItem('esse');
		sessionStorage.removeItem('esseeq');
		sessionStorage.removeItem('esseeqd');
		sessionStorage.removeItem('esseeqdr');
		this.environmentsServices.removeEnvironment();
		this.situationsService.removeSituation();
		this.sensationsService.removeSensation();
		this.emotionsService.removeEmotion();
		this.questionsService.removeQuestion();
		this.distinctionsService.removeDistinction();
		this.resourcesService.removeResource();
	}

	removeAllExceptEnv() {
		this.situationsService.removeSituation();
		this.sensationsService.removeSensation();
		this.emotionsService.removeEmotion();
		this.questionsService.removeQuestion();
		this.distinctionsService.removeDistinction();
		this.resourcesService.removeResource();
	}

	removeAllExceptEnvAndSit() {
		this.sensationsService.removeSensation();
		this.emotionsService.removeEmotion();
		this.questionsService.removeQuestion();
		this.distinctionsService.removeDistinction();
		this.resourcesService.removeResource();
	}

	removeAllExceptEnvSitSensation() {
		this.emotionsService.removeEmotion();
		this.questionsService.removeQuestion();
		this.distinctionsService.removeDistinction();
		this.resourcesService.removeResource();
	}

	removeAllExceptEnvSitSenEmotion() {
		this.questionsService.removeQuestion();
		this.distinctionsService.removeDistinction();
		this.resourcesService.removeResource();
	}

	removeAllExceptEnvSitSenEmotQuestion() {
		this.distinctionsService.removeDistinction();
		this.resourcesService.removeResource();
	}

	validateEnvSit(): boolean {
		if (
			this.environmentsServices.existEnvironment() &&
			this.situationsService.existSituation()
		) {
			return true;
		}
		return false;
	}

	validateEnvSitSen(): boolean {
		if (
			this.environmentsServices.existEnvironment() &&
			this.situationsService.existSituation() &&
			this.sensationsService.existSensation()
		) {
			return true;
		}
		return false;
	}

	validateEnvSitSenEmo(): boolean {
		if (
			this.environmentsServices.existEnvironment() &&
			this.situationsService.existSituation() &&
			this.sensationsService.existSensation() &&
			this.emotionsService.existEmotion()
		) {
			return true;
		}
		return false;
	}

	validateEnvSitSenEmoQues(): boolean {
		if (
			this.environmentsServices.existEnvironment() &&
			this.situationsService.existSituation() &&
			this.sensationsService.existSensation() &&
			this.emotionsService.existEmotion() &&
			this.questionsService.existQuestion()
		) {
			return true;
		}
		return false;
	}

	validateEnvSitSenEmoQuesDist(): boolean {
		if (
			this.environmentsServices.existEnvironment() &&
			this.situationsService.existSituation() &&
			this.sensationsService.existSensation() &&
			this.emotionsService.existEmotion() &&
			this.questionsService.existQuestion() &&
			this.distinctionsService.existDistinction()
		) {
			return true;
		}
		return false;
	}

	validateEnvSitSenEmoQuesDistResource(): boolean {
		if (
			this.environmentsServices.existEnvironment() &&
			this.situationsService.existSituation() &&
			this.sensationsService.existSensation() &&
			this.emotionsService.existEmotion() &&
			this.questionsService.existQuestion() &&
			this.distinctionsService.existDistinction() &&
			this.resourcesService.existResource()
		) {
			return true;
		}
		return false;
	}

	validateNumberId(id: string) {
		const idValidate = Number(id);
		if (!isNaN(idValidate)) return true;
		return false;
	}
}
