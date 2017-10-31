import { TestBed, inject } from '@angular/core/testing';

import { GapiOauthService } from './gapi-oauth.service';

describe('GapiOauthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GapiOauthService]
    });
  });

  it('should be created', inject([GapiOauthService], (service: GapiOauthService) => {
    expect(service).toBeTruthy();
  }));
});
