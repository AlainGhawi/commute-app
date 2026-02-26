import { Injectable, signal, computed, effect, inject } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

export type ThemeMode = 'light' | 'dark' | 'system';
export type ResolvedTheme = 'light' | 'dark';

const STORAGE_KEY = 'commute-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  readonly mode = signal<ThemeMode>(this.loadPreference());

  private readonly systemPreference = signal<ResolvedTheme>(this.detectSystemTheme());

  readonly resolvedTheme = computed<ResolvedTheme>(() => {
    const m = this.mode();
    if (m === 'system') return this.systemPreference();
    return m;
  });

  readonly isDark = computed(() => this.resolvedTheme() === 'dark');

  constructor() {
    if (this.isBrowser && typeof window.matchMedia === 'function') {
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      mql.addEventListener('change', (e) => {
        this.systemPreference.set(e.matches ? 'dark' : 'light');
      });
    }

    effect(() => {
      const theme = this.resolvedTheme();
      this.applyTheme(theme);
    });
  }

  setMode(mode: ThemeMode): void {
    this.mode.set(mode);
    this.persistPreference(mode);
  }

  toggleLightDark(): void {
    this.setMode(this.resolvedTheme() === 'light' ? 'dark' : 'light');
  }

  private applyTheme(theme: ResolvedTheme): void {
    if (!this.isBrowser) return;
    const root = this.document.documentElement;
    root.classList.remove('light-theme', 'dark-theme');
    root.classList.add(`${theme}-theme`);
    root.style.colorScheme = theme;

    const meta = this.document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', theme === 'dark' ? '#111827' : '#16a34a');
    }
  }

  private loadPreference(): ThemeMode {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'light' || saved === 'dark' || saved === 'system') return saved;
    } catch {
      // localStorage unavailable (SSR, private browsing)
    }
    return 'system';
  }

  private persistPreference(mode: ThemeMode): void {
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // localStorage unavailable (SSR, private browsing)
    }
  }

  private detectSystemTheme(): ResolvedTheme {
    if (!this.isBrowser || typeof window.matchMedia !== 'function') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}
