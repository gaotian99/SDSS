import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMyPlayerComponent } from './display-my-player.component';

describe('DisplayMyPlayerComponent', () => {
  let component: DisplayMyPlayerComponent;
  let fixture: ComponentFixture<DisplayMyPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMyPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMyPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
