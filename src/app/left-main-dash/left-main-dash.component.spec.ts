import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMainDashComponent } from './left-main-dash.component';

describe('LeftMainDashComponent', () => {
  let component: LeftMainDashComponent;
  let fixture: ComponentFixture<LeftMainDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftMainDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftMainDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
