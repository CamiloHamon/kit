import { AfterViewInit, Component, ElementRef, Injectable, OnInit, ViewChild } from '@angular/core';
import { ModalsService } from 'src/app/services/modals/modals.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-modal-error',
  templateUrl: './modal-error.component.html',
  styleUrls: ['./modal-error.component.css']
})
export class ModalErrorComponent implements OnInit {
  @ViewChild('modalError') modal: ElementRef;
  goBack: string;

  constructor(private modalsService: ModalsService) { }

  get getModalError() {
    return this.modal;
  }

  set setGoBack(field: string) {
    this.goBack = field;
  }

  public showModalError(goBack:string, size: string) {
    this.setGoBack = goBack;
    this.modalsService.open(this.modal, size);
  }

  ngOnInit(): void { }
}
