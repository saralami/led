import { TestBed } from '@angular/core/testing';

import { ClassServiceService } from './class.serviceee

describe('ClassServiceService', () => {
  let service: ClassServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
