import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../model/user';

@Component({
    selector : 'app-user',
    //template : `<h2>User Component Loaded Successfully !</h2>`
    templateUrl : './user.component.html',
    // styles : [`
    //     h2{
    //         color : royalblue;
    //     }
    // `]
    styleUrls : [`./user.component.css`],
    encapsulation : ViewEncapsulation.Emulated
})
export class UserComponent{
    @Input('xyz') title : string;
    @Input('user') user : User;
    @Output('childEvent') childEvent = new EventEmitter<string>()

    onKeyup(value : string){
        this.childEvent.emit(value);
    }

    moreInfo(user : User){
        alert(`${user.firstName } is working with ${user.company}!!`);
    }
    
}