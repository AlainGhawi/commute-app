export interface Ride {
  id: string;
  driverId: string;
  driverName: string;
  riderIds: string[];
  riderNames: string[];
  origin: string;
  destination: string;
  departureTime: string;
  seatsAvailable: number;
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
}

export interface RideRequest {
  destination: string;
  preferredTime: string;
  flexibility: '15min' | '30min' | '1hr';
  notes?: string;
}
