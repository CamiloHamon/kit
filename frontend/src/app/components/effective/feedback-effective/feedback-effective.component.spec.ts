import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackEffectiveComponent } from './feedback-effective.component';

describe('FeedbackEffectiveComponent', () => {
  let component: FeedbackEffectiveComponent;
  let fixture: ComponentFixture<FeedbackEffectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackEffectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackEffectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
