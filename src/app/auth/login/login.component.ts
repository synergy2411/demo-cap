import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login(f : NgForm){
    console.log("Username : " + f.value.username + 
          "\nPasword : " + f.value.password);
    console.log(f);
    this.authService.login(
      f.value.username,
      f.value.password
    )
  }
  getData(){
    this.dataService.getApiData();
  }
  constructor(private authService : AuthService, private dataService : DataService) { }

  ngOnInit() {
  }

}
