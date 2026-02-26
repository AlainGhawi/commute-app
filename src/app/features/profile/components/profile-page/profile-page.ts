import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';
import { AuthService } from '../../../../core/auth/auth.service';
import { ThemeService } from '../../../../core/services/theme.service';

@Component({
  selector: 'app-profile-page',
  template: `
    <h1 class="page-title">{{ 'profile.title' | translate }}</h1>

    <mat-card class="profile-card">
      <div class="profile-header">
        <div class="avatar-ring">
          <mat-icon>person</mat-icon>
        </div>
        <h2 class="user-name">{{ auth.currentUser()?.name }}</h2>
        <p class="user-email">{{ auth.currentUser()?.email }}</p>
      </div>
    </mat-card>

    <div class="settings-section">
      <h3 class="section-label">{{ 'profile.preferences' | translate }}</h3>
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
          <mat-list-item (click)="theme.toggleLightDark()">
            <mat-icon matListItemIcon>{{ theme.isDark() ? 'light_mode' : 'dark_mode' }}</mat-icon>
            <span matListItemTitle>{{ 'theme.appearance' | translate }}</span>
            <span matListItemLine>{{ theme.isDark() ? ('theme.dark' | translate) : ('theme.light' | translate) }}</span>
          </mat-list-item>
        </mat-nav-list>
      </mat-card>
    </div>

    <button mat-stroked-button class="logout-btn" (click)="auth.logout()">
      <mat-icon>logout</mat-icon>
      {{ 'profile.logout' | translate }}
    </button>
  `,
  styles: [
    `
      .page-title { font-size: 1.25rem; font-weight: 600; margin-bottom: var(--space-4); }

      .profile-card { margin-bottom: var(--space-4); overflow: hidden; }

      .profile-header {
        background: linear-gradient(135deg, #16a34a 0%, #0d9488 100%);
        padding: var(--space-8) var(--space-4) var(--space-6);
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .avatar-ring {
        width: 80px; height: 80px; border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
        display: flex; align-items: center; justify-content: center;
        margin-bottom: var(--space-3);
      }
      .avatar-ring mat-icon {
        font-size: 3rem; width: 3rem; height: 3rem; color: white;
      }

      .user-name { font-size: 1.25rem; font-weight: 700; color: white; }
      .user-email { font-size: 0.875rem; color: rgba(255, 255, 255, 0.8); margin-top: var(--space-1); }

      .settings-section { margin-bottom: var(--space-4); }
      .section-label {
        font-size: 0.8125rem; font-weight: 600;
        text-transform: uppercase; letter-spacing: 0.05em;
        color: var(--color-text-muted); padding: 0 var(--space-1);
        margin-bottom: var(--space-2);
      }

      .info-card { margin-bottom: var(--space-4); }

      .logout-btn {
        width: 100%; min-height: 48px;
        border-color: var(--color-error);
        color: var(--color-error);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatListModule, TranslatePipe],
})
export class ProfilePageComponent {
  protected readonly auth = inject(AuthService);
  protected readonly theme = inject(ThemeService);
}
