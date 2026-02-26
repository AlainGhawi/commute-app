import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('light-theme', 'dark-theme');
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should default to system mode', () => {
    expect(service.mode()).toBe('system');
  });

  it('should set mode to dark', () => {
    service.setMode('dark');
    expect(service.mode()).toBe('dark');
    expect(service.resolvedTheme()).toBe('dark');
    expect(service.isDark()).toBe(true);
  });

  it('should set mode to light', () => {
    service.setMode('light');
    expect(service.mode()).toBe('light');
    expect(service.resolvedTheme()).toBe('light');
    expect(service.isDark()).toBe(false);
  });

  it('should persist preference to localStorage', () => {
    service.setMode('dark');
    expect(localStorage.getItem('commute-theme')).toBe('dark');
  });

  it('should toggle between light and dark', () => {
    service.setMode('light');
    service.toggleLightDark();
    expect(service.mode()).toBe('dark');

    service.toggleLightDark();
    expect(service.mode()).toBe('light');
  });
});
