import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DistinctionsService } from 'src/app/services/distinctions.service';
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'app-distinctions',
  templateUrl: './distinctions.component.html',
  styleUrls: ['./distinctions.component.css']
})
export class DistinctionsComponent implements OnInit {
  distinctions: any = [];
  distinctionContent: string = '';
  idESSEQ: number = -1;
  form = new FormGroup({
    cards: new FormControl('', [Validators.required])
  });

  constructor(private distinctionsService: DistinctionsService,
    private functionsService: FunctionsService,
    private router: Router) {
    this.functionsService.removeAllExceptEnvSitSenEmotQuestion();
    this.idESSEQ = Number(sessionStorage.getItem('esseeq'));
    this.distinctionsService.getDistinctionsByESSEQ(this.idESSEQ).subscribe(
      res => {
        this.distinctions = res;
        console.log(this.distinctions);
      },
      err => {
        console.log(err);
      }
    )
  }

  ngOnInit(): void {
  }

  continue() {
    const contentDistinction = this.form.controls.cards.value.split('-');
    const idDistinction = Number(contentDistinction[0]);
    this.distinctionsService.show(idDistinction).subscribe(
      res => {
        sessionStorage.setItem('distinction', `${JSON.stringify(res)}`);
      },
      err => { console.log(err) }
    );
    this.distinctionsService.validateDistinction(this.idESSEQ, idDistinction).subscribe(
      res => {
        if (res[0].isCorrect === 1) {
          const idESSEQD = Number(contentDistinction[1]);
          sessionStorage.setItem('esseeqd', `${idESSEQD}`);
          this.router.navigate(['/conversation/distinctions/details']);
        } else {
          alert('Error!!')
        }
      },
      err => {
        console.log(err);
      }
    )
  }

  goBack() {
    this.functionsService.removeAllExceptEnvSitSenEmotQuestion();
    this.router.navigate(['/conversation/questions']);
  }

}
