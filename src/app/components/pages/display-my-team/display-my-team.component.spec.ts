import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMyTeamComponent } from './display-my-team.component';

describe('DisplayMyTeamComponent', () => {
  let component: DisplayMyTeamComponent;
  let fixture: ComponentFixture<DisplayMyTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMyTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMyTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
