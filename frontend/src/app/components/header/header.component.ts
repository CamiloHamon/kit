import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  changeBg = false;
  closeResult = '';
  active = 0;

  constructor(private router: Router, public authService: AuthService, private modal: NgbModal, config: NgbModalConfig) {
    config.backdrop = 'static';
    config.keyboard = false;
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url === '/login') this.changeBg = true;
        else this.changeBg = false;
      }
    })
  }

  ngOnInit() { }

  open(content: any) {
    this.modal.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'xl',
      centered: true,
     windowClass: 'border-custom-popup'

    }).result.then((result) => {
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
