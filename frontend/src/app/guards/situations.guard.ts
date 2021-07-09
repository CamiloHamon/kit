import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EnvironmentsService } from '../services/environments.service';

@Injectable({
  providedIn: 'root'
})
export class SituationsGuard implements CanActivate {
  constructor(private environmentsServices: EnvironmentsService, private router: Router) { }
  canActivate(): boolean {
    if (this.environmentsServices.existEnvironment()) return true;

    this.router.navigate(['/conversation/environments']);
    return false;
  }

}
