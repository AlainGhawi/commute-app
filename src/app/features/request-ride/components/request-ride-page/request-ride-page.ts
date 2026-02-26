import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-request-ride-page',
  template: `
    <h1 class="page-title">{{ 'requestRide.title' | translate }}</h1>
    <mat-card>
      <mat-card-content class="form-content">
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>{{ 'requestRide.destination' | translate }}</mat-label>
          <input matInput placeholder="e.g. Downtown Montreal" />
          <mat-icon matPrefix>location_on</mat-icon>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>{{ 'requestRide.preferredTime' | translate }}</mat-label>
          <input matInput type="time" />
          <mat-icon matPrefix>schedule</mat-icon>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>{{ 'requestRide.flexibility' | translate }}</mat-label>
          <mat-select value="30min">
            <mat-option value="15min">15 min</mat-option>
            <mat-option value="30min">30 min</mat-option>
            <mat-option value="1hr">1 hour</mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>{{ 'requestRide.notes' | translate }}</mat-label>
          <textarea matInput rows="3"></textarea>
        </mat-form-field>

        <button mat-flat-button color="primary" class="full-width submit-btn">
          {{ 'requestRide.submit' | translate }}
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
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    TranslatePipe,
  ],
})
export class RequestRidePageComponent {}
