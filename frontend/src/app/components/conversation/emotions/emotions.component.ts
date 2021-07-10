import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmotionsService } from 'src/app/services/emotions.service';
import { FunctionsService } from 'src/app/services/functions.service';
import { SensationService } from 'src/app/services/sensation.service';
import { SituationsService } from 'src/app/services/situations.service';

@Component({
  selector: 'app-emotions',
  templateUrl: './emotions.component.html',
  styleUrls: ['./emotions.component.css']
})
export class EmotionsComponent implements OnInit {
  emotions: any = [];
  emotionContent: string = '';
  form = new FormGroup({
    cards: new FormControl('', [Validators.required])
  });
  
  constructor(private emotionsService: EmotionsService,
    private situationsServices: SituationsService,
    private sensationsServices: SensationService,
    private functionsServices: FunctionsService,
    private router: Router) {
    this.functionsServices.removeAllExceptEnvSitSensation();
    const situation = this.situationsServices.getSituation();
    const sensation = this.sensationsServices.getSensation();
    this.emotionsService.getEmotionsByESAndSensation(situation.id, sensation.id).subscribe(
      res => {
        this.emotions = res;
      },
      err => {
        console.log(err)
      }
    )
  }

  ngOnInit(): void {
  }

  continue() {
    const contentEmotion = this.form.controls.cards.value.split('-');
    const idEmotion = Number(contentEmotion[0]);
    const idESSE = Number(contentEmotion[1]);
    sessionStorage.setItem('esse', `${idESSE}`);
    this.emotionsService.show(idEmotion).subscribe(
      res => {
        sessionStorage.setItem('emotion', `${JSON.stringify(res)}`);
        this.router.navigate(['/conversation/emotions/details']);
      },
      err => { console.log(err) }
    )
  }

  goBack() {
    this.functionsServices.removeAllExceptEnvSitSensation();
    this.router.navigate(['/conversation/sensations']);
  }

}
