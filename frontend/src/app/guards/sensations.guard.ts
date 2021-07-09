import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FunctionsService } from '../services/functions.service';

@Injectable({
  providedIn: 'root'
})
export class SensationsGuard implements CanActivate {
  constructor(private functionsService: FunctionsService, private router: Router) { }
  canActivate(): boolean {
    if (this.functionsService.validateEnvSit()) return true;

    this.router.navigate(['/conversation/situations']);
    return false;
  }
  
}
