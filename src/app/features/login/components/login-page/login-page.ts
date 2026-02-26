import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '../../../../shared/pipes/translate.pipe';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-login-page',
  template: `
    <div class="login-container">
      <mat-card class="login-card">
        <div class="login-header">
          <span class="material-symbols-outlined brand-icon">commute</span>
          <h1 class="login-title">{{ 'login.title' | translate }}</h1>
        </div>
        <mat-card-content>
          <form (ngSubmit)="onSubmit()" class="login-form">
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>{{ 'login.email' | translate }}</mat-label>
              <input matInput type="email" [value]="email()"
                     (input)="email.set($any($event.target).value)" required />
              <mat-icon matPrefix>email</mat-icon>
            </mat-form-field>
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>{{ 'login.password' | translate }}</mat-label>
              <input matInput type="password" [value]="password()"
                     (input)="password.set($any($event.target).value)" required />
              <mat-icon matPrefix>lock</mat-icon>
            </mat-form-field>
            <button mat-flat-button color="primary" type="submit" class="full-width login-btn">
              {{ 'login.submit' | translate }}
            </button>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [
    `
      .login-container {
        display: flex; justify-content: center; align-items: center;
        min-height: 100vh; background: var(--color-surface-alt); padding: var(--space-4);
      }
      .login-card { width: 100%; max-width: 400px; padding: var(--space-8); border-radius: var(--radius-xl); }
      .login-header { display: flex; flex-direction: column; align-items: center; margin-bottom: var(--space-8); }
      .brand-icon { font-size: 3rem; color: var(--color-primary); margin-bottom: var(--space-3); }
      .login-title { font-size: 1.5rem; font-weight: 700; letter-spacing: -0.02em; }
      .login-form { display: flex; flex-direction: column; gap: var(--space-4); }
      .full-width { width: 100%; }
      .login-btn {
        margin-top: var(--space-4); padding: var(--space-3) 0;
        min-height: 48px; font-weight: 600; font-size: 1rem;
        border-radius: var(--radius-lg);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, MatCardModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatIconModule, TranslatePipe],
})
export class LoginPageComponent {
  private readonly auth = inject(AuthService);
  protected readonly email = signal('alice@acme.com');
  protected readonly password = signal('password');

  protected onSubmit(): void {
    this.auth.login({ email: this.email(), password: this.password() });
  }
}
