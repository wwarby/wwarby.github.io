import { TestBed, inject } from '@angular/core/testing';

import { LoadTimerService } from './load-timer.service';

describe('LoadTimerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadTimerService]
    });
  });

  it('should be created', inject([LoadTimerService], (service: LoadTimerService) => {
    expect(service).toBeTruthy();
  }));
});
