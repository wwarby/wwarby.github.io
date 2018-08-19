import { TestBed, inject } from '@angular/core/testing';
import { LoadTimerService } from './load-timer.service';
import { TestsModule } from '../tests/tests.module';

describe('LoadTimerService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestsModule],
      providers: [LoadTimerService]
    });
  });

  it('should be created', inject([LoadTimerService], (service: LoadTimerService) => {
    expect(service).toBeTruthy();
  }));

});
