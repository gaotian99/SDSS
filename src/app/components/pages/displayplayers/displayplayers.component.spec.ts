import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayplayersComponent } from './displayplayers.component';

describe('DisplayplayersComponent', () => {
  let component: DisplayplayersComponent;
  let fixture: ComponentFixture<DisplayplayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayplayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayplayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
