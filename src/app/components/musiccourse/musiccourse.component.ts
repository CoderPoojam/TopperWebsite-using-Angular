import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-musiccourse',
  templateUrl: './musiccourse.component.html',
  styleUrls: ['./musiccourse.component.scss']
})
export class MusiccourseComponent implements OnInit {

  musiccourse:any;
  constructor(public CategoryS:CategoryService) {
    this.musiccourse = CategoryS.getmusiccourses();
   }

  ngOnInit(): void {
  }

  sideBaropen=false;

  sidebartoggler(){
    this.sideBaropen=!this.sideBaropen;
  }

}
