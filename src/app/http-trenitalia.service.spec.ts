import { TestBed } from '@angular/core/testing';

import { HttpTrenitaliaService } from './http-trenitalia.service';

describe('HttpTrenitaliaService', () => {
  let service: HttpTrenitaliaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpTrenitaliaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
