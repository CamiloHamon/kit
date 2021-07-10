import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EnvironmentsService } from 'src/app/services/environments.service';
import { FunctionsService } from 'src/app/services/functions.service';
import { SituationsService } from 'src/app/services/situations.service';

@Component({
  selector: 'app-situations',
  templateUrl: './situations.component.html',
  styleUrls: ['./situations.component.css']
})
export class SituationsComponent implements OnInit {
  situations: any = [];
  idSutiation: number = -1;
  form = new FormGroup({
    cards: new FormControl('', [Validators.required])
  });

  constructor(private situationsService: SituationsService,
    private environmentsServices: EnvironmentsService,
    private functionsServices: FunctionsService,
    private router: Router
  ) {
    this.functionsServices.removeAllExceptEnv();
    const environment = this.environmentsServices.getEnvironment();
    this.situationsService.index(environment.id).subscribe(
      res => {
        this.situations = res;
        console.log(this.situations)
      },
      err => console.log(err)
    );
  }

  ngOnInit(): void {
  }

  continue() {
    this.idSutiation = this.form.controls.cards.value;
    this.situationsService.show(this.idSutiation).subscribe(
      res => {
        sessionStorage.setItem('situation', `${JSON.stringify(res)}`);
      },
      err => { console.log(err) }
    )
  }

  goBack() {
    this.functionsServices.removeAllExceptEnv();
    this.router.navigate(['/conversation/environments']);
  }

}
