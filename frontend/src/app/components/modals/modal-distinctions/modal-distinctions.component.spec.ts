import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDistinctionsComponent } from './modal-distinctions.component';

describe('ModalDistinctionsComponent', () => {
  let component: ModalDistinctionsComponent;
  let fixture: ComponentFixture<ModalDistinctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDistinctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDistinctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
