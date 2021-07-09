import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FunctionsService } from '../services/functions.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionsGuard implements CanActivate {
  constructor(private functionsServices: FunctionsService, private router: Router) { }

  canActivate(): boolean {
    if (this.functionsServices.validateEnvSitSenEmo()) return true;

    this.router.navigate(['/conversation/emotions']);
    return false;
  }
  
}
