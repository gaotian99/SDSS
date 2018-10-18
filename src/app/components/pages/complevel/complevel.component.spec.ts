import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplevelComponent } from './complevel.component';

describe('ComplevelComponent', () => {
  let component: ComplevelComponent;
  let fixture: ComponentFixture<ComplevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
