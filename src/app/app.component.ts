import { Component } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentData  :string;
  onParent(data : string){
    this.parentData = data;
  }
  
  title = 'app';

  user : User = {
    firstName : "Bill",
    lastName : "Gates",
    income : 50000,
    dob : new Date("Dec 21, 1964"),
    isWorking : true,
    company : "Microsoft",
    image : "assets/images/bill.jpg",
    votes : 120
}
}
