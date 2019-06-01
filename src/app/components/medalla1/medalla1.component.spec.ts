import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Medalla1Component } from './medalla1.component';

describe('Medalla1Component', () => {
  let component: Medalla1Component;
  let fixture: ComponentFixture<Medalla1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Medalla1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Medalla1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
