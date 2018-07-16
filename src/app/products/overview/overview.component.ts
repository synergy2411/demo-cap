import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  page_no : number;
  constructor(private route : ActivatedRoute) {
    
   }
   
   onLoad(){
    this.page_no = +this.route.snapshot.queryParams['page_no']
   }
  ngOnInit() {
    this.onLoad();
  }

}
