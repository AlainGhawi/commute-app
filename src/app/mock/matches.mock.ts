import { type Match } from '../features/matches/models/match.model';

export const MOCK_MATCHES: Match[] = [
  {
    id: 'm1',
    rideId: 'r3',
    driverName: 'David Chen',
    origin: 'NDG',
    destination: 'Downtown Montreal',
    departureTime: '2026-02-27T08:15:00',
    compatibility: 0.92,
    status: 'pending',
  },
  {
    id: 'm2',
    rideId: 'r4',
    driverName: 'Eve Roy',
    origin: 'Verdun',
    destination: 'Downtown Montreal',
    departureTime: '2026-02-27T07:45:00',
    compatibility: 0.85,
    status: 'pending',
  },
];
