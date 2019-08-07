import { Injectable } from '@angular/core';
import { USER_DATA } from '../model/mocks';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class DataService {
  counter: number = 0;

  constructor(private httpClient: HttpClient,
    private authService: AuthService) { }

  getData() {
    return USER_DATA;
  }
  getJSONData() {
    return this.httpClient.get("https://ersc-e8e9f.firebaseio.com/userdata.json?auth=" + this.authService.getToken());
    // return this.httpClient.get("https://ersc-e8e9f.firebaseio.com/userdata.json",{
    //   params : new HttpParams().set("auth", this.authService.getToken())
    // });
  }
}
