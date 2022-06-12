import { TestBed } from '@angular/core/testing';

import { GarageDoorService } from './garage-door.service';

describe('GarageDoorService', () => {
  let service: GarageDoorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GarageDoorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
