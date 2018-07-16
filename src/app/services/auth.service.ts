import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

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
          })
          .catch(err=>console.log(err))
      })
      .catch(err=>console.log(err));
  }
  getToken(){
    firebase.auth().currentUser.getIdToken()
    .then(token=>{
      console.log(token);
      this.token = token;
    })
    .catch(err=>console.log(err))
    return this.token;
  }
  isAuthenticated(){
    return this.token !=null;
  }
  constructor() { }

}
