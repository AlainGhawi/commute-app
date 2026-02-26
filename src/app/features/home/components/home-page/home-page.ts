import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';
import { AuthService } from '../../../../core/auth/auth.service';
import { MOCK_RIDES } from '../../../../mock/rides.mock';
import { type Ride } from '../../../rides/models/ride.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, MatCardModule, MatButtonModule, MatIconModule, TranslatePipe],
})
export class HomePageComponent {
  protected readonly auth = inject(AuthService);
  protected readonly upcomingRides = signal<Ride[]>(
    MOCK_RIDES.filter((r) => r.status === 'scheduled')
  );
}
