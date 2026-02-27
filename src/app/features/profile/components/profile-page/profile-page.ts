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
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatListModule, TranslatePipe],
})
export class ProfilePageComponent {
  protected readonly auth = inject(AuthService);
  protected readonly theme = inject(ThemeService);
}
