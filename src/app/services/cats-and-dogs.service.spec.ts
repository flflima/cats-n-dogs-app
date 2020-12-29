import { CatsAndDogsService } from './cats-and-dogs.service';
import { TestBed } from '@angular/core/testing';

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
