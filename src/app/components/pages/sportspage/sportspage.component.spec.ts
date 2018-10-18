import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportspageComponent } from './sportspage.component';

describe('SportspageComponent', () => {
  let component: SportspageComponent;
  let fixture: ComponentFixture<SportspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
