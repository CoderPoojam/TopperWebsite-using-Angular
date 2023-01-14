import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  courses:string[];

  constructor(public auth:AuthenticationService,public Category:CategoryService) { 
    this.courses = Category.getCourses();
  }

  ngOnInit(): void {
  }

  sideBaropen=false;

  sidebartoggler(){
    this.sideBaropen=!this.sideBaropen;
  }
  // logout(){
  //   this.auth.logout();
  // }

}
