import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DistinctionsService {
  private URL = 'http://localhost:8000/api';
  
  constructor(private http: HttpClient, private router:Router) { }

  index(){
    return this.http.get<any>(`${this.URL}/distinctions`);
  }

  show(id:number){
    return this.http.get<any>(`${this.URL}/distinction/${id}`);
  }

  getDistinctionsByESSEQ(idESSEQ:number){
    return this.http.get<any>(`${this.URL}/distinctions/${idESSEQ}`);
  }

  validateDistinction(idESSEQ:number, idDistinction:number){
    return this.http.get<any>(`${this.URL}/isCorrectDistinction/${idESSEQ}/${idDistinction}`);
  }
}
