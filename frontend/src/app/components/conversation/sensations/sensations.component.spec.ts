import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensationsComponent } from './sensations.component';

describe('EmotionsComponent', () => {
  let component: SensationsComponent;
  let fixture: ComponentFixture<SensationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
