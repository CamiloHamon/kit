import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SensationService {
  private URL = 'http://localhost:8000/api';
  
  constructor(private http: HttpClient, private router:Router) { }

  index(idSensation: number){
    return this.http.get<any>(`${this.URL}/sensations/${idSensation}`);
  }

  show(idSensation:number){
    return this.http.get<any>(`${this.URL}/sensation/${idSensation}`);
  }
}
