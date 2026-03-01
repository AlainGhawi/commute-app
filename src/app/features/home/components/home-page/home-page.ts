import { Component, ChangeDetectionStrategy, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';
import { AuthService } from '../../../../core/auth/auth.service';
import { TranslationService } from '../../../../core/i18n/translation.service';
import { MOCK_RIDES } from '../../../../mock/rides.mock';
import { type Ride } from '../../../rides/models/ride.model';

interface StatCard {
  icon: string;
  iconBg: string;
  value: string;
  labelKey: string;
  trend: string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, MatCardModule, MatButtonModule, MatIconModule, TranslatePipe],
})
export class HomePageComponent {
  protected readonly auth = inject(AuthService);
  protected readonly i18n = inject(TranslationService);

  protected readonly upcomingRides = signal<Ride[]>(
    MOCK_RIDES.filter((r) => r.status === 'scheduled'),
  );

  protected readonly nextRide = computed(() => this.upcomingRides()[0] ?? null);

  protected readonly greeting = computed(() => {
    const firstName = this.auth.currentUser()?.name?.split(' ')[0] ?? '';
    return this.i18n.isFr() ? `Bonjour, ${firstName}!` : `Welcome back, ${firstName}!`;
  });

  protected readonly todayDate = computed(() => {
    const locale = this.i18n.locale() === 'fr' ? 'fr-CA' : 'en-CA';
    return new Date().toLocaleDateString(locale, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  });

  protected readonly nextRideInfo = computed(() => {
    const ride = this.nextRide();
    if (!ride) return null;
    const locale = this.i18n.locale() === 'fr' ? 'fr-CA' : 'en-CA';
    const time = new Date(ride.departureTime).toLocaleTimeString(locale, {
      hour: '2-digit',
      minute: '2-digit',
    });
    return { time, driverName: ride.driverName };
  });

  protected readonly stats = computed<StatCard[]>(() => {
    const isFr = this.i18n.isFr();
    return [
      {
        icon: 'directions_car',
        iconBg: 'linear-gradient(135deg, #16a34a, #059669)',
        value: '12',
        labelKey: 'home.stats.ridesMonth',
        trend: isFr ? '+3 vs mois dernier' : '+3 vs last month',
      },
      {
        icon: 'savings',
        iconBg: 'linear-gradient(135deg, #16a34a, #059669)',
        value: '$156',
        labelKey: 'home.stats.moneySaved',
        trend: isFr ? '+42$ vs mois dernier' : '+$42 vs last month',
      },
      {
        icon: 'eco',
        iconBg: 'linear-gradient(135deg, #16a34a, #059669)',
        value: '38 kg',
        labelKey: 'home.stats.co2',
        trend: isFr ? '+12 kg vs mois dernier' : '+12 kg vs last month',
      },
      {
        icon: 'calendar_month',
        iconBg: 'linear-gradient(135deg, #16a34a, #059669)',
        value: '23',
        labelKey: 'home.stats.days',
        trend: isFr ? 'moy. 8 jours/mois' : '8 days/month avg',
      },
    ];
  });
}
