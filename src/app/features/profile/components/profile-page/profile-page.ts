import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-profile-page',
  template: `
    <h1 class="page-title">{{ 'profile.title' | translate }}</h1>

    <mat-card class="profile-card">
      <mat-card-content>
        <div class="avatar">
          <mat-icon>account_circle</mat-icon>
        </div>
        <h2 class="user-name">{{ auth.currentUser()?.name }}</h2>
        <p class="user-email">{{ auth.currentUser()?.email }}</p>
      </mat-card-content>
    </mat-card>

    <mat-card class="info-card">
      <mat-nav-list>
        <mat-list-item>
          <mat-icon matListItemIcon>location_on</mat-icon>
          <span matListItemTitle>{{ 'profile.homeZone' | translate }}</span>
          <span matListItemLine>{{ auth.currentUser()?.homeZone }}</span>
        </mat-list-item>
        <mat-list-item>
          <mat-icon matListItemIcon>badge</mat-icon>
          <span matListItemTitle>Role</span>
          <span matListItemLine>{{ auth.currentUser()?.role }}</span>
        </mat-list-item>
      </mat-nav-list>
    </mat-card>

    <button mat-stroked-button color="warn" class="logout-btn" (click)="auth.logout()">
      <mat-icon>logout</mat-icon>
      {{ 'profile.logout' | translate }}
    </button>
  `,
  styles: [
    `
      .page-title { font-size: 1.25rem; font-weight: 600; margin-bottom: var(--space-4); }
      .profile-card { margin-bottom: var(--space-4); }
      .profile-card mat-card-content {
        display: flex; flex-direction: column; align-items: center; padding: var(--space-6);
      }
      .avatar mat-icon { font-size: 4rem; width: 4rem; height: 4rem; color: var(--color-primary); }
      .user-name { font-size: 1.25rem; font-weight: 600; margin-top: var(--space-2); }
      .user-email { font-size: 0.875rem; color: var(--color-text-secondary); }
      .info-card { margin-bottom: var(--space-4); }
      .logout-btn { width: 100%; }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatListModule, TranslatePipe],
})
export class ProfilePageComponent {
  protected readonly auth = inject(AuthService);
}
