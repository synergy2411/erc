import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService{

  register(email : string, password : string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }

  login(email : string, password : string){}

}


//
// npm i firebase --save
// firebase.initialApp({config obj}) in root comp
// Register method in AuthService
// Call register() from Register Comp
