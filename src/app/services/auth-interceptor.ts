import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Auth Interceptor!", req);

    const clonedReq = req.clone({
      params: new HttpParams().set("auth", this.authService.getToken())
    })
    return next.handle(clonedReq);
  }

  constructor(private authService: AuthService) { }
}

