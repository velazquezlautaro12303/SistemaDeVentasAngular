import { TestBed } from '@angular/core/testing';

import { MyCarritoService } from './my-carrito.service';

describe('MyCarritoService', () => {
  let service: MyCarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyCarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
