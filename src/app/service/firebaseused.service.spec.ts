import { TestBed } from '@angular/core/testing';

import { FirebaseusedService } from './firebaseused.service';

describe('FirebaseusedService', () => {
  let service: FirebaseusedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseusedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
