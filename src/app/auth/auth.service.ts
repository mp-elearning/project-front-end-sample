import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import * as firebase from  'firebase';
import {User} from "firebase";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  constructor(afAuth: AngularFireAuth,
              router : Router) {

                

  }
  signupUser(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .catch(
        error =>console.log(error)
    )
   }
   signinUser(email: string, password: string) {

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
          
        response => {
          console.log("reached")
          console.log(response)
        }
           
      )
      .catch(
        error => console.log(error)
      );
  }
}
