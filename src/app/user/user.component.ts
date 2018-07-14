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
export class UserComponent{}