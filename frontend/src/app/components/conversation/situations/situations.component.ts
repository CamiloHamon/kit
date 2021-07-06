import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnvironmentsService } from 'src/app/services/environments.service';
import { SituationsService } from 'src/app/services/situations.service';

@Component({
  selector: 'app-situations',
  templateUrl: './situations.component.html',
  styleUrls: ['./situations.component.css']
})
export class SituationsComponent implements OnInit {
  situations: any = [];
  idSutiation: number = -1;
  environment: any = [];
  constructor(private situationsService: SituationsService, private router:Router) {
    let infoEnvironment:any = localStorage.getItem('environment');
    infoEnvironment = JSON.parse(infoEnvironment);
    this.environment = infoEnvironment;
    this.situationsService.getSituationByEnvironment(this.environment.id).subscribe(
      res => {
        this.situations = res;
        console.log(this.situations)
      },
      err => console.log(err)
    );    
  }

  ngOnInit(): void {
  }

  continue(){
    console.log(this.idSutiation);
    this.situationsService.show(this.idSutiation).subscribe(
      res=>{
        localStorage.setItem('situation', `${JSON.stringify(res)}`);
        this.router.navigate(['/conversation/sensations']);
      },
      err => { console.log(err) }
    )
  }

}
