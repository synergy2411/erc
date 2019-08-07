import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import * as firebase from 'firebase';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyA5Fpcag5Hi1Y3Qd_HD8lCtBaqUcML3g34",
      authDomain: "ersc-e8e9f.firebaseapp.com"
    })
  }

  constructor(public dataService: DataService,
            public authService : AuthService) { }

  onIncrease() {
    this.dataService.counter++;
  }

  title = 'users-app';
  todo = {
    label: "Pot the plant",
    status: true
  }
}
