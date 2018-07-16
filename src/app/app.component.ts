import { Component } from '@angular/core';
import { User } from './model/user';
import { DataService } from './services/data.service';
//import { USER_DATA } from './data/mocks';
import * as firebase from 'firebase';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentData  :string;
  onParent(data : string){
    this.title = data;
  }
  
  title = 'app';

 users : User[];

 ngOnInit(){
   firebase.initializeApp({
    apiKey: "AIzaSyAGU2rpm-Glx5JXCQ4o7oQNRO7f3LThDVw",
    authDomain: "capgemini-demo-82cab.firebaseapp.com"
   });
  //  this.users = USER_DATA;
  //this.users = this.dataService.getUserData();
  this.dataService.getJsonData()
    .subscribe(
      (data)=>this.users = data
    )
 }
 increase(){this.dataService.counter++;}
 constructor(public dataService : DataService,
            public authService : AuthService){}
}
