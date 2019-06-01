import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelNumbersComponent } from './level-numbers.component';

describe('LevelNumbersComponent', () => {
  let component: LevelNumbersComponent;
  let fixture: ComponentFixture<LevelNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
