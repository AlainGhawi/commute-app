import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';
import { MOCK_RIDES } from '../../../../mock/rides.mock';
import { type Ride } from '../../models/ride.model';

@Component({
  selector: 'app-ride-list',
  template: `
    <h1 class="page-title">{{ 'rides.title' | translate }}</h1>
    <mat-tab-group>
      <mat-tab [label]="'rides.upcoming' | translate">
        @for (ride of upcoming(); track ride.id) {
          <mat-card class="ride-card" [routerLink]="['/rides', ride.id]">
            <mat-card-content class="ride-content">
              <div class="ride-route">
                <span>{{ ride.origin }}</span>
                <mat-icon class="arrow">arrow_forward</mat-icon>
                <span>{{ ride.destination }}</span>
              </div>
              <div class="ride-meta">
                <mat-icon>schedule</mat-icon> {{ ride.departureTime }}
              </div>
            </mat-card-content>
          </mat-card>
        } @empty {
          <p class="empty">{{ 'common.noData' | translate }}</p>
        }
      </mat-tab>
      <mat-tab [label]="'rides.history' | translate">
        @for (ride of history(); track ride.id) {
          <mat-card class="ride-card" [routerLink]="['/rides', ride.id]">
            <mat-card-content class="ride-content">
              <div class="ride-route">
                <span>{{ ride.origin }}</span>
                <mat-icon class="arrow">arrow_forward</mat-icon>
                <span>{{ ride.destination }}</span>
              </div>
              <div class="ride-meta">
                <mat-icon>schedule</mat-icon> {{ ride.departureTime }}
              </div>
            </mat-card-content>
          </mat-card>
        } @empty {
          <p class="empty">{{ 'common.noData' | translate }}</p>
        }
      </mat-tab>
    </mat-tab-group>
  `,
  styles: [
    `
      .page-title { font-size: 1.25rem; font-weight: 600; margin-bottom: var(--space-4); }
      .ride-card { margin: var(--space-3) 0; cursor: pointer; }
      .ride-content { display: flex; flex-direction: column; gap: var(--space-2); }
      .ride-route { display: flex; align-items: center; gap: var(--space-2); font-weight: 500; }
      .arrow { font-size: 1rem; width: 1rem; height: 1rem; color: var(--color-text-muted); }
      .ride-meta { display: flex; align-items: center; gap: var(--space-2); font-size: 0.875rem; color: var(--color-text-secondary); }
      .ride-meta mat-icon { font-size: 1rem; width: 1rem; height: 1rem; }
      .empty { text-align: center; padding: var(--space-8); color: var(--color-text-muted); }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, MatCardModule, MatTabsModule, MatIconModule, TranslatePipe],
})
export class RideListComponent {
  protected readonly upcoming = signal<Ride[]>(
    MOCK_RIDES.filter((r) => r.status === 'scheduled')
  );
  protected readonly history = signal<Ride[]>(
    MOCK_RIDES.filter((r) => r.status === 'completed')
  );
}
