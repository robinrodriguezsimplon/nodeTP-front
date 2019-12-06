import { TestBed } from '@angular/core/testing';

import { RequeteService } from './requete.service';

describe('RequeteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequeteService = TestBed.get(RequeteService);
    expect(service).toBeTruthy();
  });
});
