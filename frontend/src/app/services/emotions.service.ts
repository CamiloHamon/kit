import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmotionsService {
  private URL = 'http://localhost:8000/api';
  
  constructor(private http: HttpClient, private router:Router) { }

  index(){
    return this.http.get<any>(`${this.URL}/emotions`);
  }

  show(idEmotion:number){
    return this.http.get<any>(`${this.URL}/emotion/${idEmotion}`);
  }

  getEmotionsByESAndSensation(idES:number, idSensation:number){
    return this.http.get<any>(`${this.URL}/emotions/${idES}/${idSensation}`);
  }
}
