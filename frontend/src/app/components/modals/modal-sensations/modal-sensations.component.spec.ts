import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSensationsComponent } from './modal-sensations.component';

describe('ModalSensationsComponent', () => {
  let component: ModalSensationsComponent;
  let fixture: ComponentFixture<ModalSensationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSensationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSensationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
