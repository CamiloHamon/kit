import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FunctionsService } from 'src/app/services/functions.service';
import { SensationService } from 'src/app/services/sensation.service';


@Component({
  selector: 'app-sensations',
  templateUrl: './sensations.component.html',
  styleUrls: ['./sensations.component.css']
})
export class SensationsComponent implements OnInit {
  idSensation: number = -1;
  sensations: any = [];

  constructor(private sensationService: SensationService, private functionsServices: FunctionsService, private router: Router) {
    this.functionsServices.removeAllExceptEnvAndSit();
    this.sensationService.index().subscribe(
      res => {
        this.sensations = res;
        console.log(this.sensations)
      },
      err => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {
  }

  continue() {
    console.log(this.idSensation);
    this.sensationService.show(this.idSensation).subscribe(
      res => {
        sessionStorage.setItem('sensation', `${JSON.stringify(res)}`);
      },
      err => { console.log(err) }
    )
  }

  goBack() {
    this.functionsServices.removeAllExceptEnvAndSit();
    this.router.navigate(['/conversation/situations']);
  }

}
