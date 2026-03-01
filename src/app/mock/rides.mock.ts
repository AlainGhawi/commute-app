import { type Ride } from '../features/rides/models/ride.model';

export const MOCK_RIDES: Ride[] = [
  {
    id: 'r1',
    driverId: 'u2',
    driverName: 'Walid Chelala',
    riderIds: ['u1'],
    riderNames: ['Alain Ghawi'],
    origin: 'Plateau Mont-Royal',
    destination: 'Downtown Montreal',
    departureTime: '2026-02-26T08:00:00',
    seatsAvailable: 2,
    status: 'scheduled',
  },
  {
    id: 'r2',
    driverId: 'u1',
    driverName: 'Alain Ghawi',
    riderIds: ['u3'],
    riderNames: ['Walid Chelala'],
    origin: 'Plateau Mont-Royal',
    destination: 'Downtown Montreal',
    departureTime: '2026-02-25T17:30:00',
    seatsAvailable: 3,
    status: 'completed',
  },
];
