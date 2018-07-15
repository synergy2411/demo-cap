import { Component } from '@angular/core';
import { User } from './model/user';
import { DataService } from './services/data.service';
//import { USER_DATA } from './data/mocks';

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
  //  this.users = USER_DATA;
  //this.users = this.dataService.getUserData();
  this.dataService.getJsonData()
    .subscribe(
      (data)=>this.users = data
    )
 }

 constructor(private dataService : DataService){}
}
