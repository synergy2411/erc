import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';


@Injectable()
export class LoggerInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Logger Interceptor!");

    return next.handle(req)
    .pipe(map(response => {
      console.log(response);
      return response;
    }));
  }

  constructor(private authService: AuthService) { }
}

