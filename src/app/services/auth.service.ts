import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService{

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
            console.log(token);
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
