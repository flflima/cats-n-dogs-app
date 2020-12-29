import { TestBed } from '@angular/core/testing';

import { CatsAndDogsService } from './cats-and-dogs.service';

describe('CatsAndDogsService', () => {
  let service: CatsAndDogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatsAndDogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
