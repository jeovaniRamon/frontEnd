import { TestBed } from '@angular/core/testing';

import { ServicioPagoService } from './servicio-pago.service';

describe('ServicioPagoService', () => {
  let service: ServicioPagoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPagoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
