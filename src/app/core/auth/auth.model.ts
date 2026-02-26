export interface AppUser {
  id: string;
  email: string;
  name: string;
  role: 'rider' | 'driver' | 'both';
  homeZone: string;
  tenantId: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}
