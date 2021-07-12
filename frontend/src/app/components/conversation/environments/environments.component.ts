import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EnvironmentsService } from 'src/app/services/environments.service';
import { FunctionsService } from 'src/app/services/functions.service';
import { ModalErrorComponent } from '../../modals/modal-error/modal-error.component';

@Component({
  selector: 'app-environments',
  templateUrl: './environments.component.html',
  styleUrls: ['./environments.component.css']
})
export class EnvironmentsComponent implements OnInit {
  @ViewChild(ModalErrorComponent) modalError: ModalErrorComponent;
  environments: any = [];
  idEnvironment: number = -1;
  form = new FormGroup({
    cards: new FormControl('', [Validators.required])
  });

  constructor(private environmentsServices: EnvironmentsService, private functionsServices: FunctionsService, private router: Router) {
    this.functionsServices.removeAllItems();
    this.environmentsServices.index().subscribe(
      res => this.environments = res,
      err => this.modalError.showModalError('', 'lg')
    );
  }

  ngOnInit(): void { }

  continue() {
    this.idEnvironment = this.form.controls.cards.value;
    this.environmentsServices.show(this.idEnvironment).subscribe(
      res => {
        console.log(res)
        sessionStorage.setItem('environment', `${JSON.stringify(res)}`);
      },
      err => this.modalError.showModalError('', 'lg')
    )
  }

  goBack() {
    this.functionsServices.removeAllItems();
    this.router.navigate(['/conversation']);
  }

}
