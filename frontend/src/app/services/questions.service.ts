import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  private URL = 'http://localhost:8000/api';
  
  constructor(private http: HttpClient, private router:Router) { }

  index(){
    return this.http.get<any>(`${this.URL}/questions`);
  }

  show(idQuestion:number){
    return this.http.get<any>(`${this.URL}/question/${idQuestion}`);
  }

  getQuestionsByESSE(idESSE:number){
    return this.http.get<any>(`${this.URL}/questions/${idESSE}`);
  }

  validateQuestion(idESSE:number, idQuestion:number){
    return this.http.get<any>(`${this.URL}/isCorrectQuestion/${idESSE}/${idQuestion}`);
  }
}
