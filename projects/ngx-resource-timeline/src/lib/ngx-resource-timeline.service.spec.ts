import { TestBed } from '@angular/core/testing';

import { NgxResourceTimelineService } from './ngx-resource-timeline.service';

describe('NgxResourceTimelineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxResourceTimelineService = TestBed.get(NgxResourceTimelineService);
    expect(service).toBeTruthy();
  });
});
