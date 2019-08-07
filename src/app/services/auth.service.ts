import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService{

  constructor(private router : Router){}

  private token = null;

  register(email : string, password : string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }

  login(email : string, password : string){
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        firebase.auth().currentUser.getIdToken()
          .then(token => {
            // console.log(token);
            this.router.navigate(['/users']);
            this.token = token;
          })
      }).catch(err => console.log(err));
  }

  isAuthenticated(){
    return this.token != null;
  }

  getToken(){
    return this.token;
  }

}


//
// npm i firebase --save
// firebase.initialApp({config obj}) in root comp
// Register method in AuthService
// Call register() from Register Comp
