import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FunctionsService } from '../services/functions.service';

@Injectable({
  providedIn: 'root'
})
export class DistinctionsGuard implements CanActivate {
  constructor(private functionsServices: FunctionsService, private router: Router) { }

  canActivate(): boolean {
    if (this.functionsServices.validateEnvSitSenEmoQues()) return true;

    this.router.navigate(['/conversation/questions']);
    return false;
  }
  
}
