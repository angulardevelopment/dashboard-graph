import { TestBed, async, inject } from '@angular/core/testing';

import { NewGuardGuard } from './new-guard.guard';

describe('NewGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewGuardGuard]
    });
  });

  it('should ...', inject([NewGuardGuard], (guard: NewGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
