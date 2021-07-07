import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistinctionsDetailsComponent } from './distinctions-details.component';

describe('DistinctionsDetailsComponent', () => {
  let component: DistinctionsDetailsComponent;
  let fixture: ComponentFixture<DistinctionsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistinctionsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistinctionsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
