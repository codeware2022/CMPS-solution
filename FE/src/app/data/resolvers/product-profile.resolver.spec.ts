import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { productProfileResolver } from './product-profile.resolver';

describe('productProfileResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => productProfileResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
