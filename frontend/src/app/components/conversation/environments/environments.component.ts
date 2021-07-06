import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnvironmentsService } from 'src/app/services/environments.service';

@Component({
  selector: 'app-environments',
  templateUrl: './environments.component.html',
  styleUrls: ['./environments.component.css']
})
export class EnvironmentsComponent implements OnInit {
  environments: any = [];
  environmentId: number = -1;
  constructor(private environmentsServices: EnvironmentsService, private router: Router) { }

  ngOnInit(): void {
    this.environmentsServices.getAllEnvironments().subscribe(res => {
      this.environments = res;
    }, err => console.log(err))
  }

  continue() {
    console.log(this.environmentId);
    this.environmentsServices.getEnvironment(this.environmentId).subscribe(
      res => {
        console.log(res)
        localStorage.setItem('environment', `${JSON.stringify(res)}`);
        this.router.navigate(['/conversation/situations']);
      },
      err => { console.log(err) }
    )
  }

}
