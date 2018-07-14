import { Component, ViewEncapsulation } from '@angular/core';

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
    moreInfo(user){
        alert(`${user.firstName } is working with ${user.company}!!`);
    }
    user = {
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