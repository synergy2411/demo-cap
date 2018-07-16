import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  token : string = null;
  register(username : string, password : string){
    firebase.auth().createUserWithEmailAndPassword(
      username, password
    ).then(response=>{
      console.log(response)
    }).catch(err=>console.log(err))
  }
  login(username : string, password : string){
    firebase.auth().signInWithEmailAndPassword(username, password)
      .then(response=>{
        console.log(response);
        firebase.auth().currentUser.getIdToken()
          .then(token=>{
            console.log(token);
            this.token = token;
            this.router.navigate(['pipe']);
          })
          .catch(err=>console.log(err))
      })
      .catch(err=>console.log(err));
  }
  getToken(){
    firebase.auth().currentUser.getIdToken()
    .then(token=>{
      console.log(token);
      localStorage.setItem('token', this.token);
      this.token = token;
    })
    .catch(err=>console.log(err))
    return this.token;
  }
  isAuthenticated(){
    return this.token !=null;
  }
  constructor(private router : Router) { }

}
