import { TestBed } from '@angular/core/testing';

import { IdusoService } from './iduso.service';

describe('IdusoService', () => {
  let service: IdusoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdusoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
