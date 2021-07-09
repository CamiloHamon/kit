import { Injectable } from '@angular/core';
import { DistinctionsService } from './distinctions.service';
import { EmotionsService } from './emotions.service';
import { EnvironmentsService } from './environments.service';
import { QuestionsService } from './questions.service';
import { ResourcesService } from './resources.service';
import { SensationService } from './sensation.service';
import { SituationsService } from './situations.service';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor(
    private environmentsServices: EnvironmentsService,
    private situationsService: SituationsService,
    private sensationsService: SensationService,
    private emotionsService: EmotionsService,
    private questionsService: QuestionsService,
    private distinctionsService: DistinctionsService,
    private resourcesService: ResourcesService
  ) { }

  removeAllItems(){
    this.environmentsServices.removeEnvironment();
    this.situationsService.removeSituation();
    this.sensationsService.removeSensation();
    this.emotionsService.removeEmotion();
    this.questionsService.removeQuestion();
    this.distinctionsService.removeDistinction();
    this.resourcesService.removeResource();
  }

  removeAllExceptEnv(){
    this.situationsService.removeSituation();
    this.sensationsService.removeSensation();
    this.emotionsService.removeEmotion();
    this.questionsService.removeQuestion();
    this.distinctionsService.removeDistinction();
    this.resourcesService.removeResource();
  }

  removeAllExceptEnvAndSit(){
    this.sensationsService.removeSensation();
    this.emotionsService.removeEmotion();
    this.questionsService.removeQuestion();
    this.distinctionsService.removeDistinction();
    this.resourcesService.removeResource();
  }

  removeAllExceptEnvSitSensation(){
    this.emotionsService.removeEmotion();
    this.questionsService.removeQuestion();
    this.distinctionsService.removeDistinction();
    this.resourcesService.removeResource();
  }

  removeAllExceptEnvSitSenEmotion(){
    this.questionsService.removeQuestion();
    this.distinctionsService.removeDistinction();
    this.resourcesService.removeResource();
  }

  removeAllExceptEnvSitSenEmotQuestion(){
    this.distinctionsService.removeDistinction();
    this.resourcesService.removeResource();
  }

}
