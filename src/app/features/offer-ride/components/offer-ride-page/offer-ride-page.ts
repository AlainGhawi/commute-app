import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-offer-ride-page',
  template: `
    <h1 class="page-title">{{ 'offerRide.title' | translate }}</h1>
    <mat-card>
      <mat-card-content class="form-content">
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>{{ 'offerRide.route' | translate }}</mat-label>
          <input matInput placeholder="e.g. Plateau to Downtown" />
          <mat-icon matPrefix>route</mat-icon>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>{{ 'offerRide.seats' | translate }}</mat-label>
          <input matInput type="number" min="1" max="6" value="3" />
          <mat-icon matPrefix>event_seat</mat-icon>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>{{ 'offerRide.schedule' | translate }}</mat-label>
          <input matInput type="time" />
          <mat-icon matPrefix>schedule</mat-icon>
        </mat-form-field>

        <button mat-flat-button color="primary" class="full-width submit-btn">
          {{ 'offerRide.submit' | translate }}
        </button>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
      .page-title {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: var(--space-4);
      }
      .form-content {
        display: flex;
        flex-direction: column;
        gap: var(--space-1);
        padding-top: var(--space-4);
      }
      .full-width {
        width: 100%;
      }
      .submit-btn {
        margin-top: var(--space-2);
        padding: var(--space-3) 0;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    TranslatePipe,
  ],
})
export class OfferRidePageComponent {}
