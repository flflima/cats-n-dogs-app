import { CatsAndDogsService } from './cats-and-dogs.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

describe('CatsAndDogsService', () => {
  let service: CatsAndDogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(CatsAndDogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
