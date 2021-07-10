import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  resources: any = [];
  resourceContent: string = '';
  idESSEQD: number = -1;
  form = new FormGroup({
    cards: new FormControl('', [Validators.required])
  });

  constructor(private resourcesService: ResourcesService, private router: Router) {
    this.resourcesService.removeResource();
    this.idESSEQD = Number(sessionStorage.getItem('esseeqd'));
    this.resourcesService.getResourcesByESSEQD(this.idESSEQD).subscribe(
      res => {
        this.resources = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }

  ngOnInit(): void {
  }

  continue() {
    const contentResource = this.form.controls.cards.value.split('-');
    const idResource = Number(contentResource[0]);
    this.resourcesService.show(idResource).subscribe(
      res => {
        sessionStorage.setItem('resource', `${JSON.stringify(res)}`);
      },
      err => { console.log(err) }
    );
    this.resourcesService.validateResource(this.idESSEQD, idResource).subscribe(
      res => {
        if (res[0].isCorrect === 1) {
          const idESSEQDR = Number(contentResource[1]);
          sessionStorage.setItem('esseeqdr', `${idESSEQDR}`);
          this.router.navigate(['/conversation/resources/details']);
        } else {
          alert('Error!!')
        }
      },
      err => {
        console.log(err);
      }
    )
  }

  goBack(){
    this.resourcesService.removeResource();
    this.router.navigate(['/conversation/distinctions']);
  }

}
