import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-know-kit',
  templateUrl: './know-kit.component.html',
  styleUrls: ['./know-kit.component.css']
})
export class KnowKitComponent implements OnInit, AfterViewInit {
  closeResult = '';
  active = 0;

  @ViewChild('content') content: ElementRef | undefined;
  constructor(private modal: NgbModal, config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngAfterViewInit(): void {
    this.open(this.content);
  }

  ngOnChanges(changes: any) {
    this.open(this.content);
  }


  ngOnInit(): void {
  }

  open(content: any) {
    this.modal.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
