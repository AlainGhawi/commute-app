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
  templateUrl: './ride-list.html',
  styleUrl: './ride-list.scss',
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
