import { Injectable } from '@angular/core';
import { USER_DATA } from '../model/mocks';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService{
  constructor(private httpClient : HttpClient){}
  getData(){
  return USER_DATA;
  }
  getJSONData(){
    return this.httpClient.get("assets/model/user-data.json");
  }
}
