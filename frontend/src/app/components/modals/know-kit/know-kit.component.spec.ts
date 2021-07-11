import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowKitComponent } from './know-kit.component';

describe('KnowKitComponent', () => {
  let component: KnowKitComponent;
  let fixture: ComponentFixture<KnowKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowKitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
