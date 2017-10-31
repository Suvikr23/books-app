import { TestBed, inject } from '@angular/core/testing';

import { PageHelperService } from './page-helper.service';

describe('PageHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageHelperService]
    });
  });

  it('should be created', inject([PageHelperService], (service: PageHelperService) => {
    expect(service).toBeTruthy();
  }));
});
