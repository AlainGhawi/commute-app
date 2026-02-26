import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of, delay } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MOCK_RIDES } from '../../mock/rides.mock';
import { MOCK_MATCHES } from '../../mock/matches.mock';

export const mockApiInterceptor: HttpInterceptorFn = (req, next) => {
  if (!environment.useMocks) {
    return next(req);
  }

  const url = req.url;

  if (url.endsWith('/api/rides')) {
    return of(new HttpResponse({ status: 200, body: MOCK_RIDES })).pipe(delay(300));
  }

  if (url.endsWith('/api/matches')) {
    return of(new HttpResponse({ status: 200, body: MOCK_MATCHES })).pipe(delay(300));
  }

  return next(req);
};
