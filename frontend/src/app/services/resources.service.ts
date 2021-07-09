import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  private URL = 'http://localhost:8000/api';
  
  constructor(private http: HttpClient, private router:Router) { }

  index(){
    return this.http.get<any>(`${this.URL}/resources`);
  }

  show(id:number){
    return this.http.get<any>(`${this.URL}/resource/${id}`);
  }

  getResourcesByESSEQD(idESSEEQD:number){
    return this.http.get<any>(`${this.URL}/resources/${idESSEEQD}`);
  }

  validateResource(idESSEEQD:number, idResource:number){
    return this.http.get<any>(`${this.URL}/isCorrectResource/${idESSEEQD}/${idResource}`);
  }

  getResource() {
    let infoResource: any = sessionStorage.getItem('resource');
    infoResource = JSON.parse(infoResource);
    return infoResource;
  }

  existResource(): boolean {
    return !!sessionStorage.getItem('resource');
  }

  removeResource():void{
    sessionStorage.removeItem('resource');
  }
}
