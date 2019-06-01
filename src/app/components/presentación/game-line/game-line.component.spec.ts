import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameLineComponent } from './game-line.component';

describe('GameLineComponent', () => {
  let component: GameLineComponent;
  let fixture: ComponentFixture<GameLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
