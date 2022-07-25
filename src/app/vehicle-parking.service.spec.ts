import { TestBed } from '@angular/core/testing';

import { VehicleParkingService } from './vehicle-parking.service';

describe('VehicleParkingService', () => {
  let service: VehicleParkingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleParkingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
