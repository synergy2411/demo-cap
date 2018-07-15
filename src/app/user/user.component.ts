import { Component, 
    ViewEncapsulation, 
    Input, 
    Output, 
    EventEmitter,
    OnInit, 
    SimpleChanges} from '@angular/core';
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
export class UserComponent implements OnInit{
    @Input('xyz') title : string;
    @Input('users') users : User[];
    @Output('childEvent') childEvent = new EventEmitter<string>();

    myClasses = {
        myBorder : true,
        myText : false
    }

    myColor = "green";
    // constructor(){
    //     console.log('constructor');
    // }
    // ngOnInit(){
    //     console.log("ngOnInit");
    // }
    // ngOnChanges(changes : SimpleChanges){console.log("ngOnChanges", changes);}
    // ngDoCheck(){console.log("ngDoCheck");}
    // ngAfterContentInit(){console.log("ngAfterContentInit");}
    // ngAfterContentChecked(){console.log("ngAfterContentChecked");}
    // ngAfterViewInit(){console.log("ngAfterViewInit");}
    // ngAfterViewChecked(){console.log("ngAfterViewChecked");}
    // ngOnDestroy(){console.log("ngOnDestroy");}

    onKeyup(value : string){
        this.childEvent.emit(value);
    }

    moreInfo(user : User){
        this.myClasses.myBorder = false;
        this.myClasses.myText = true;
        alert(`${user.firstName } is working with ${user.company}!!`);
    }
    
}