import { Injectable } from '@angular/core';
import { USER_DATA } from '../data/mocks';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
    counter : number = 0;
    getUserData(){
        return USER_DATA;
    }
    getJsonData(){
       return this.http.get("assets/data/user-data.json")
            .map(response=> <User[]>response.json().userdata)    
    }
    getApiData(){
       return this.httpClient.get<User[]>("https://capgemini-demo-82cab.firebaseio.com/userdata.json")
            // .subscribe(
            //     data=>console.log(data)
            // )
    }
    constructor(private http : Http,
                private httpClient : HttpClient){}
}