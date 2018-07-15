import { Injectable } from '@angular/core';
import { USER_DATA } from '../data/mocks';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../model/user';


@Injectable()
export class DataService {
    getUserData(){
        return USER_DATA;
    }
    getJsonData(){
       return this.http.get("assets/data/user-data.json")
            .map(response=> <User[]>response.json().userdata)    
            
    }
    constructor(private http : Http){}
}