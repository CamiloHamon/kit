import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentsService {
  private URL = 'http://localhost:8000/api';

  idSelected = new EventEmitter<number>();

  constructor(private http: HttpClient, private router:Router) { }

  getAllEnvironments(){
    return this.http.get<any>(`${this.URL}/environments`);
  }

  getEnvironment(id:number){
    return this.http.get<any>(`${this.URL}/environment/${id}`);
  }
}
