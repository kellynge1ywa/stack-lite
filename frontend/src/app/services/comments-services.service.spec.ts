import { TestBed } from '@angular/core/testing';

import { CommentsServicesService } from './comments-services.service';

describe('CommentsServicesService', () => {
  let service: CommentsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
