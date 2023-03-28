import { TestBed } from '@angular/core/testing';

import { SeeAllMessageService } from './see-all-message.service';

describe('SeeAllMessageService', () => {
  let service: SeeAllMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeeAllMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
