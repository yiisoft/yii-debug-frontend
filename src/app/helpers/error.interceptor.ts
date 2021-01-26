import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorService } from '../services/error.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private errorService: ErrorService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((response) => {
        if (response instanceof HttpErrorResponse) {
          if (response.status === 401) {
            return;
          }

          if (response.status === 400 && response.message) {
            this.errorService.addErrors(
              Array.isArray(response.message)
                ? response.message
                : [`Error ${response.status}: ${response.message}`],
            );
            return;
          }
        }
        this.errorService.addErrors([
          `Error ${response.status} occurred while receiving data from server`,
        ]);
        return throwError(response);
      }),
    );
  }
}
