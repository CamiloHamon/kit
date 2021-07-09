import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnvironmentsService } from 'src/app/services/environments.service';
import { FunctionsService } from 'src/app/services/functions.service';

@Component({
  selector: 'app-environments',
  templateUrl: './environments.component.html',
  styleUrls: ['./environments.component.css']
})
export class EnvironmentsComponent implements OnInit {
  environments: any = [];
  environmentId: number = -1;

  constructor(private environmentsServices: EnvironmentsService, private functionsServices: FunctionsService, private router: Router) {
    this.functionsServices.removeAllItems();
    this.environmentsServices.index().subscribe(
      res => {
        this.environments = res;
      },
      err => console.log(err))
  }

  ngOnInit(): void { }

  continue() {
    console.log(this.environmentId);
    this.environmentsServices.show(this.environmentId).subscribe(
      res => {
        console.log(res)
        sessionStorage.setItem('environment', `${JSON.stringify(res)}`);
      },
      err => { console.log(err) }
    )
  }

  goBack() {
    this.functionsServices.removeAllItems();
    this.router.navigate(['/conversation']);
  }

}
