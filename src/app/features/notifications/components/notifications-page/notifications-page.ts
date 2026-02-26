import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-notifications-page',
  template: `
    <h1 class="page-title">{{ 'notifications.title' | translate }}</h1>
    <mat-card class="empty-card">
      <mat-card-content>
        <mat-icon>notifications_none</mat-icon>
        <p>{{ 'notifications.empty' | translate }}</p>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      .page-title { font-size: 1.25rem; font-weight: 600; margin-bottom: var(--space-4); }
      .empty-card mat-card-content {
        display: flex; flex-direction: column; align-items: center;
        padding: var(--space-8); color: var(--color-text-muted);
      }
      .empty-card mat-icon { font-size: 3rem; width: 3rem; height: 3rem; margin-bottom: var(--space-2); }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatCardModule, MatIconModule, TranslatePipe],
})
export class NotificationsPageComponent {}
