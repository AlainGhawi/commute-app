import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { TranslationService } from '../../../core/i18n/translation.service';
import { AuthService } from '../../../core/auth/auth.service';
import { ThemeService } from '../../../core/services/theme.service';
import { APP } from '../../../core/config/app.constants';

interface TabItem {
  icon: string;
  labelKey: string;
  route: string;
}

@Component({
  selector: 'app-shell',
  templateUrl: './app-shell.html',
  styleUrl: './app-shell.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    TranslatePipe,
  ],
})
export class AppShellComponent {
  protected readonly i18n = inject(TranslationService);
  protected readonly auth = inject(AuthService);
  protected readonly theme = inject(ThemeService);
  protected readonly appName = APP.name;

  protected readonly tabs: TabItem[] = [
    { icon: 'home', labelKey: 'nav.home', route: '/' },
    { icon: 'directions_car', labelKey: 'nav.rides', route: '/rides' },
    { icon: 'handshake', labelKey: 'nav.matches', route: '/matches' },
    { icon: 'person', labelKey: 'nav.profile', route: '/profile' },
  ];
}
