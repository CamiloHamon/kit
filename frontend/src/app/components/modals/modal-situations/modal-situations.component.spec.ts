import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSituationsComponent } from './modal-situations.component';

describe('ModalSituationsComponent', () => {
  let component: ModalSituationsComponent;
  let fixture: ComponentFixture<ModalSituationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSituationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSituationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
