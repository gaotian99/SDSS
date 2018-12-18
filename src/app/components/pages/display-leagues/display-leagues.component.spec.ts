import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayLeaguesComponent } from './display-leagues.component';

describe('DisplayLeaguesComponent', () => {
  let component: DisplayLeaguesComponent;
  let fixture: ComponentFixture<DisplayLeaguesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayLeaguesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayLeaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
