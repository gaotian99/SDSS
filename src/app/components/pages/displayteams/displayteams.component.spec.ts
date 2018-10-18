import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayteamsComponent } from './displayteams.component';

describe('DisplayteamsComponent', () => {
  let component: DisplayteamsComponent;
  let fixture: ComponentFixture<DisplayteamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayteamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
