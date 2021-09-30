import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css'],
})
export class ConversationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onActivate(e: any) {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }
}
