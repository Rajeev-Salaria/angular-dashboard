import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable,catchError} from 'rxjs';
import { AuthService, ErrorService } from 'src/app/_services';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _authService: AuthService,private _errorService:ErrorService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // Get the auth token from the service.
    const authToken :any = this._authService.getAuthToken();

    if(authToken !== null && authToken !== undefined){

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = request.clone({
      headers: request.headers.set('Authorization', 'Bearer '+authToken)
    });
    return next.handle(authReq).pipe(catchError(this._errorService.handleError));;
  }
    return next.handle(request).pipe(catchError(this._errorService.handleError));

  }
}
