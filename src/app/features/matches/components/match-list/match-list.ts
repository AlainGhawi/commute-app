import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';
import { MOCK_MATCHES } from '../../../../mock/matches.mock';
import { type Match } from '../../models/match.model';

@Component({
  selector: 'app-match-list',
  template: `
    <h1 class="page-title">{{ 'matches.title' | translate }}</h1>
    @for (match of matches(); track match.id) {
      <mat-card class="match-card">
        <mat-card-content>
          <div class="match-route">
            <span>{{ match.origin }}</span>
            <mat-icon class="arrow">arrow_forward</mat-icon>
            <span>{{ match.destination }}</span>
          </div>
          <div class="match-meta">
            <span><mat-icon>person</mat-icon> {{ match.driverName }}</span>
            <span><mat-icon>schedule</mat-icon> {{ match.departureTime }}</span>
          </div>
          <div class="match-compat">
            {{ 'matches.compatibility' | translate }}: {{ (match.compatibility * 100).toFixed(0) }}%
          </div>
          <div class="match-actions">
            <button mat-stroked-button>{{ 'matches.decline' | translate }}</button>
            <button mat-flat-button color="primary">{{ 'matches.accept' | translate }}</button>
          </div>
        </mat-card-content>
      </mat-card>
    } @empty {
      <mat-card class="empty-card">
        <mat-card-content>
          <mat-icon>handshake</mat-icon>
          <p>{{ 'matches.noMatches' | translate }}</p>
        </mat-card-content>
      </mat-card>
    }
  `,
  styles: [
    `
      .page-title { font-size: 1.25rem; font-weight: 600; margin-bottom: var(--space-4); }
      .match-card { margin-bottom: var(--space-3); }
      .match-route { display: flex; align-items: center; gap: var(--space-2); font-weight: 500; margin-bottom: var(--space-2); }
      .arrow { font-size: 1rem; width: 1rem; height: 1rem; color: var(--color-text-muted); }
      .match-meta { display: flex; flex-direction: column; gap: var(--space-1); font-size: 0.875rem; color: var(--color-text-secondary); margin-bottom: var(--space-2); }
      .match-meta span { display: flex; align-items: center; gap: var(--space-2); }
      .match-meta mat-icon { font-size: 1rem; width: 1rem; height: 1rem; }
      .match-compat { font-size: 0.875rem; color: var(--color-primary); font-weight: 600; margin-bottom: var(--space-3); }
      .match-actions { display: flex; gap: var(--space-3); justify-content: flex-end; }
      .empty-card mat-card-content { display: flex; flex-direction: column; align-items: center; padding: var(--space-8); color: var(--color-text-muted); }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatCardModule, MatButtonModule, MatIconModule, TranslatePipe],
})
export class MatchListComponent {
  protected readonly matches = signal<Match[]>(MOCK_MATCHES);
}
