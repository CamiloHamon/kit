import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionsDetailsComponent } from './emotions-details.component';

describe('EmotionsDetailsComponent', () => {
  let component: EmotionsDetailsComponent;
  let fixture: ComponentFixture<EmotionsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmotionsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmotionsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
