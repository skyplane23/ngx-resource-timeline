import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxResourceTimelineComponent } from './ngx-resource-timeline.component';

describe('NgxResourceTimelineComponent', () => {
  let component: NgxResourceTimelineComponent;
  let fixture: ComponentFixture<NgxResourceTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxResourceTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxResourceTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
