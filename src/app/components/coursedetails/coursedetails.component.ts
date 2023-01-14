import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.scss']
})
export class CoursedetailsComponent implements OnInit {

  item:any;
  topcdata: any[] = [];
  constructor(public CategoryS:CategoryService, private route:ActivatedRoute) {
    this.topcdata=CategoryS.gettopc();   
   }

   ngOnInit(): void {
    //get parameters
    let id=<number><unknown>this.route.snapshot.paramMap.get('id');
   
    this.item= this.CategoryS.getId(id);
  }
  sideBaropen=true;

  sidebartoggler(){
    this.sideBaropen=!this.sideBaropen;
  }

}
