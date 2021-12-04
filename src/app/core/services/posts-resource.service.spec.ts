import { TestBed } from '@angular/core/testing';

import { PostsResourceService } from './posts-resource.service';

describe('PostsResourceService', () => {
  let service: PostsResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
