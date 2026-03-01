import { Injectable, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { type AppUser, type LoginCredentials } from './auth.model';

const STORAGE_KEY = 'commute-auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly router = inject(Router);

  readonly currentUser = signal<AppUser | null>(this.loadUser());
  readonly isAuthenticated = computed(() => this.currentUser() !== null);

  login(credentials: LoginCredentials): void {
    const mockUser: AppUser = {
      id: 'u1',
      email: credentials.email,
      name: 'Alain Ghawi',
      role: 'both',
      homeZone: 'Plateau Mont-Royal',
      tenantId: 'tenant-1',
    };
    this.currentUser.set(mockUser);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(mockUser));
    } catch {
      // localStorage unavailable
    }
    this.router.navigate(['/']);
  }

  logout(): void {
    this.currentUser.set(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // localStorage unavailable
    }
    this.router.navigate(['/login']);
  }

  private loadUser(): AppUser | null {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? (JSON.parse(stored) as AppUser) : null;
    } catch {
      return null;
    }
  }
}
