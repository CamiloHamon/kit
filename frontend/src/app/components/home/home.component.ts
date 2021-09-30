import { Component, OnInit } from '@angular/core';
import { SwiperModule, SwiperComponent } from 'swiper/angular';
import SwiperCore, { Keyboard, Pagination, Navigation, SwiperOptions } from "swiper";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {
    sessionStorage.clear();
  }

  ngOnInit(): void {}

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: false,
    pagination: { clickable: true },
  };
}
