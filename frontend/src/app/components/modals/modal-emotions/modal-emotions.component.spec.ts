import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEmotionsComponent } from './modal-emotions.component';

describe('ModalEmotionsComponent', () => {
  let component: ModalEmotionsComponent;
  let fixture: ComponentFixture<ModalEmotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEmotionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEmotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
