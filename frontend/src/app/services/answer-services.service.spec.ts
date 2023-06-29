import { TestBed } from '@angular/core/testing';

import { AnswerServicesService } from './answer-services.service';

describe('AnswerServicesService', () => {
  let service: AnswerServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnswerServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
