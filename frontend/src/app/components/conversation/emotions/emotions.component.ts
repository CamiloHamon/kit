import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmotionsService } from 'src/app/services/emotions.service';

@Component({
  selector: 'app-emotions',
  templateUrl: './emotions.component.html',
  styleUrls: ['./emotions.component.css']
})
export class EmotionsComponent implements OnInit {

  environment: any = [];
  situation: any = [];
  sensation: any = [];
  emotions: any = [];
  emotionContent: string = '';
  idESSE: number = -1;
  idEmotion: number = -1;

  constructor(private emotionsService: EmotionsService, private router:Router) {
    let infoEnvironment: any = localStorage.getItem('environment');
    infoEnvironment = JSON.parse(infoEnvironment);

    let infoSituation: any = localStorage.getItem('situation');
    infoSituation = JSON.parse(infoSituation);

    let infoSensation: any = localStorage.getItem('sensation');
    infoSensation = JSON.parse(infoSensation);

    this.environment = infoEnvironment;
    this.situation = infoSituation;
    this.sensation = infoSensation;

    this.emotionsService.getEmotionsByESAndSensation(this.situation.id, this.sensation.id).subscribe(
      res=>{
        console.log(res);
        this.emotions = res;
      },
      err =>{
        console.log(err)
      }
    )
  }

  ngOnInit(): void {
  }

  continue() {
    const contentEmotion = this.emotionContent.split('-');
    this.idEmotion = Number(contentEmotion[0]);
    this.idESSE = Number(contentEmotion[1]);
    localStorage.setItem('esse', `${this.idESSE}`);
    this.emotionsService.show(this.idEmotion).subscribe(
      res=>{
        localStorage.setItem('emotion', `${JSON.stringify(res)}`);
        this.router.navigate(['/conversation/questions']);
      },
      err => { console.log(err) }
    )
  }

}
