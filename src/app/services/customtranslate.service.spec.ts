import { TestBed } from '@angular/core/testing';

import { CustomtranslateService } from './customtranslate.service';

describe('CustomtranslateService', () => {
  let service: CustomtranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomtranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
