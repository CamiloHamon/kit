import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalsService } from 'src/app/services/modals/modals.service';
import { ResourcesService } from 'src/app/services/resources.service';
import { ModalErrorComponent } from '../../modals/modal-error/modal-error.component';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  @ViewChild('content') content: ElementRef | undefined;
  @ViewChild(ModalErrorComponent) modalError: ModalErrorComponent;
  back: string = 'conversation/distinctions';
  resources: any = [];
  resourceContent: string = '';
  idESSEQD: number = -1;
  form = new FormGroup({
    cards: new FormControl('', [Validators.required])
  });

  constructor(private resourcesService: ResourcesService,
    private modalsServices: ModalsService,
    private router: Router) {
    this.resourcesService.removeResource();
    this.idESSEQD = Number(sessionStorage.getItem('esseeqd'));
    this.resourcesService.getResourcesByESSEQD(this.idESSEQD).subscribe(
      res => {
        if (res.length > 0) this.resources = res;
        else this.modalError.showModalError(this.back, 'lg');
      },
      err => this.modalError.showModalError(this.back, 'lg')
    )
  }

  ngOnInit(): void { }

  continue() {
    const contentResource = this.form.controls.cards.value.split('-');
    const idResource = Number(contentResource[0]);
    this.resourcesService.show(idResource).subscribe(
      res => {
        sessionStorage.setItem('resource', `${JSON.stringify(res)}`);
      },
      err => this.modalError.showModalError(this.back, 'lg')
    );
    this.resourcesService.validateResource(this.idESSEQD, idResource).subscribe(
      res => {
        if (res.length > 0) {
          if (res[0].isCorrect === 1) {
            const idESSEQDR = Number(contentResource[1]);
            sessionStorage.setItem('esseeqdr', `${idESSEQDR}`);
            this.router.navigate(['/conversation/resources/details']);
          } else this.modalsServices.open(this.content, 'lg');
        } else this.modalError.showModalError(this.back, 'lg')
      },
      err => this.modalError.showModalError(this.back, 'lg')
    )
  }

  goBack() {
    this.resourcesService.removeResource();
    this.router.navigate(['/conversation/distinctions']);
  }

}
