export interface Match {
  id: string;
  rideId: string;
  driverName: string;
  origin: string;
  destination: string;
  departureTime: string;
  compatibility: number;
  status: 'pending' | 'accepted' | 'declined';
}
