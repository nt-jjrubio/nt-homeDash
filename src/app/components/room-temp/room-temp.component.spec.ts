import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomTempComponent } from './room-temp.component';

describe('RoomTempComponent', () => {
  let component: RoomTempComponent;
  let fixture: ComponentFixture<RoomTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
