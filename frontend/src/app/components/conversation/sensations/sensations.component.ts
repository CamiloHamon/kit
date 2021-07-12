import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FunctionsService } from 'src/app/services/functions.service';
import { SensationService } from 'src/app/services/sensation.service';
import { ModalErrorComponent } from '../../modals/modal-error/modal-error.component';


@Component({
  selector: 'app-sensations',
  templateUrl: './sensations.component.html',
  styleUrls: ['./sensations.component.css']
})
export class SensationsComponent implements OnInit {
  @ViewChild(ModalErrorComponent) modalError: ModalErrorComponent;
  back: string = 'conversation/situations';
  idSensation: number = -1;
  sensations: any = [];
  form = new FormGroup({
    cards: new FormControl('', [Validators.required])
  });

  constructor(private sensationService: SensationService, private functionsServices: FunctionsService, private router: Router) {
    this.functionsServices.removeAllExceptEnvAndSit();
    this.sensationService.index().subscribe(
      res => {
        if (res.length > 0) this.sensations = res;
        else this.modalError.showModalError(this.back, 'lg');
      },
      err => this.modalError.showModalError(this.back, 'lg')
    );
  }

  ngOnInit(): void {
  }

  continue() {
    this.idSensation = this.form.controls.cards.value;
    this.sensationService.show(this.idSensation).subscribe(
      res => {
        sessionStorage.setItem('sensation', `${JSON.stringify(res)}`);
      },
      err => this.modalError.showModalError(this.back, 'lg')
    )
  }

  goBack() {
    this.functionsServices.removeAllExceptEnvAndSit();
    this.router.navigate(['/conversation/situations']);
  }

}
