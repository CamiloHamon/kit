import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emotions-details',
  templateUrl: './emotions-details.component.html',
  styleUrls: ['./emotions-details.component.css']
})
export class EmotionsDetailsComponent implements OnInit {
  emotion: any = [];
  constructor(private router: Router) {
    let infoEmotion: any = localStorage.getItem('emotion');
    const content = JSON.parse(infoEmotion);
    this.emotion = content;
    try {
      const split = content.description.split('. ');
      let generate = split[0].split('? ')
      generate = generate[1];
      let comunication = split[1].split('? ');
      comunication = comunication[1];
      this.emotion.generate = generate;
      this.emotion.comunication = comunication;
    } catch (e) {
      console.log(e);
    }
  }

  ngOnInit(): void {
  }

}
