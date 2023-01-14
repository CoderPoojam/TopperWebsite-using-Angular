import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursestab',
  templateUrl: './coursestab.component.html',
  styleUrls: ['./coursestab.component.scss']
})
export class CoursestabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  sideBaropen=true;

  sidebartoggler(){
    this.sideBaropen=!this.sideBaropen;
  }

}
