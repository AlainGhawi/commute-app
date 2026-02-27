import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';
import { MOCK_MATCHES } from '../../../../mock/matches.mock';
import { type Match } from '../../models/match.model';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.html',
  styleUrl: './match-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatCardModule, MatButtonModule, MatIconModule, TranslatePipe],
})
export class MatchListComponent {
  protected readonly matches = signal<Match[]>(MOCK_MATCHES);
}
